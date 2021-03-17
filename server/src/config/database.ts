import { ConnectionOptions } from "typeorm";


export default {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: "animelibdev",
  logging: false,
  entities: ["../modules/**/infra/typeorm/entities/*.ts "],
  migrations: ["../shared/database/migration/*.ts"],
} as ConnectionOptions;