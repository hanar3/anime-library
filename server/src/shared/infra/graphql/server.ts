import "reflect-metadata";
import "@shared/container";
import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import tradeTokenForUser from "@shared/helpers/authHelpers";
import httpApp from '@shared/infra/http/server';
import { buildSchema } from "type-graphql";
import authChecker from "./authChecker";
import AnimesResolver from "@modules/Animes/infra/graphql/AnimeResolver";
import UserResolver from "@modules/Users/infra/graphql/UserResolver";
import ReviewsResolver from "@modules/Reviews/infra/graphql/ReviewResolver";
import SessionsResolver from "@modules/Sessions/infra/graphql/SessionsResolver";
import dbConfig from '@config/database';

console.log(dbConfig);
createConnection(dbConfig).then(async () => {
  const schema = await buildSchema({
    resolvers: [AnimesResolver, UserResolver, ReviewsResolver, SessionsResolver],
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

}).catch(err => console.log(err));
