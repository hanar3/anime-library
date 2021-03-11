import { GraphQLObjectType, GraphQLSchema } from "graphql";

import rootMutation from '@modules/rootMutation';
import rootQuery from '@modules/rootQuery';

export default new GraphQLSchema({
  query: new GraphQLObjectType({ name: "RootQueryType", fields: { ...rootQuery } }),
  mutation: new GraphQLObjectType({ name: "RootMutationType", fields: { ...rootMutation }})
});