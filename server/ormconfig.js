require("dotenv").config();


module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: "animelibdev",
  logging: false,
  entities: ["./src/modules/**/infra/typeorm/entities/*.ts "],
  migrations: ["./src/shared/database/migration/*.ts"],
  cli: {
    migrationsDir: "src/shared/database/migration",
  },
};
