import "reflect-metadata";
import "dotenv/config";
import "@shared/container";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import tradeTokenForUser from "@shared/helpers/authHelpers";
import httpApp from '@shared/infra/http/server';

createConnection().then((connection) => {

  const schema = require('./schema').default;
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
