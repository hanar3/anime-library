import routes from './routes';
import express from "express";
const app = express();
app.use('/static', express.static(__dirname + '/tmp'));
app.use(routes);
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);

export default app;