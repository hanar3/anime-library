import "reflect-metadata";
import "dotenv/config";
import "@shared/container";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import tradeTokenForUser from "@shared/helpers/authHelpers";
import httpApp from '@shared/infra/http/server';
import { buildSchema } from "type-graphql";
import authChecker from "./authChecker";
import AnimesResolver from "@modules/Animes/infra/graphql/AnimeResolver";
import UserResolver from "@modules/Users/infra/graphql/UserResolver";
createConnection().then(async () => {
  const schema = await buildSchema({
    resolvers: [AnimesResolver, UserResolver],
    authChecker: authChecker,
  })

  const server = new ApolloServer({
    schema,
    playground: true,
    context: async ({ req }) => {
      let currentUser;
      let authToken;
      try {
        authToken = req.headers["authorization"];
        if (authToken) {
          currentUser = tradeTokenForUser(authToken);
        }
      } catch (e) {
        console.warn(`Unable to authenticate using auth token: ${authToken}`);
      }
      return {
        authToken,
        currentUser,
      };
    },
  });

  // GraphQL server also starts an http server, mostly for file upload
  // TODO: HTTP API
  server.applyMiddleware({ app: httpApp });

});
