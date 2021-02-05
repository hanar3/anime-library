import "reflect-metadata";
import 'dotenv/config';

import { ApolloServer } from "apollo-server";
import { createConnection } from 'typeorm';

createConnection({ 
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'animelibdev',
  database: 'animelibdev',
  entities: [__dirname+ "/entity/*.ts"],

  synchronize: true,
}).then(connection => {
  const schema = require('./schema').default;
  const server = new ApolloServer({
    schema,
    playground: true
  });

  server.listen(4000, () => console.log(`Server running on port 4000`))
});





