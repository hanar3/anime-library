import "reflect-metadata";
import "dotenv/config";

import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import express from "express";
import routes from "./shared/routes";
import tradeTokenForUser from "./shared/helpers/authHelpers";

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "animelibdev",
  database: "animelibdev",
  entities: [__dirname + "/modules/**/entity/*.ts"],
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
  app.use('/static', express.static(__dirname + '/tmp'));

  app.use(routes);

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
