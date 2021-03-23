import "reflect-metadata";
import "@shared/container";
import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import jwt from "express-jwt";
import httpApp from "@shared/infra/http/server";
import { buildSchema } from "type-graphql";
import authChecker from "./authChecker";
import AnimesResolver from "@modules/Animes/infra/graphql/AnimeResolver";
import UserResolver from "@modules/Users/infra/graphql/UserResolver";
import ReviewsResolver from "@modules/Reviews/infra/graphql/ReviewResolver";
import SessionsResolver from "@modules/Sessions/infra/graphql/SessionsResolver";
import dbConfig from "@config/database";
import path from "path";

createConnection({
  ...dbConfig,
  entities: [
    path.join(__dirname, "../../../modules/**/infra/typeorm/entities/*.ts"),
  ],
})
  .then(async () => {
    const schema = await buildSchema({
      resolvers: [
        AnimesResolver,
        UserResolver,
        ReviewsResolver,
        SessionsResolver,
      ],
      authChecker: authChecker,
    });

    const server = new ApolloServer({
      schema,
      playground: true,
      context: ({ req }) => {
        const context = {
          req,
          user: req.user,
        };

        return context;
      },
    });

    // GraphQL server also starts an http server, mostly for file upload
    httpApp.use(
      "/graphql",
      jwt({
        secret: "ssssh-secret",
        credentialsRequired: false,
        algorithms: ["HS256"],
      })
    );

    httpApp.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res.status(401).json({ error: "Invalid token" });
      }
    });

    server.applyMiddleware({ app: httpApp });
  })
  .catch((err) => console.log(err));
