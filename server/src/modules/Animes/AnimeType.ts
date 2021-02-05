import { GraphQLNonNull, GraphQLObjectType, GraphQLString, graphqlSync } from "graphql";

export default new GraphQLObjectType({
  name: 'AnimeType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    englishName: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    }
  }
})