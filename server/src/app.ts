import "reflect-metadata";
import "dotenv/config";

import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import express from 'express';
import tradeTokenForUser from "./helpers/authHelpers";

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "animelibdev",
  database: "animelibdev",
  entities: [__dirname + "/entity/*.ts"],

  synchronize: true,
}).then((connection) => {
  const schema = require("./schema").default;

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

  const app = express();
  server.applyMiddleware({ app });

  app.get('/api/');

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
  
});
