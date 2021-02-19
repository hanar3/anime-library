import "reflect-metadata";
import "dotenv/config";

import { ApolloServer } from "apollo-server";
import CreateAnimeService from "./services/CreateAnimeService";
import { createConnection } from "typeorm";
import tradeTokenForUser from "./helpers/authHelpers";

const animes = require("./data/animes.json");

// animes.forEach((a) => console.log(a.title));

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

  server.listen(4000, () => console.log(`Server running on port 4000`));
});
