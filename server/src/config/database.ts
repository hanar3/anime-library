import { ConnectionOptions } from "typeorm";
import path from 'path';

export default {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: "animelibdev",
  logging: false,
} as ConnectionOptions;