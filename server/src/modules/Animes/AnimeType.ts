import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  graphqlSync,
} from "graphql";

export default new GraphQLObjectType({
  name: "AnimeType",
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
    japaneseName: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    episodes: {
      type: GraphQLInt,
    },
    description: {
      type: GraphQLString,
    },
  },
});
