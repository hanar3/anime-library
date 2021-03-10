import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLUnionType,
} from "graphql";

import ErrorType from "../../shared/Error/ErrorType";

const AnimeType = new GraphQLObjectType({
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
    banner: {
      type: GraphQLString,
    },
    bannerUrl: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});

export const AnimeOrError = new GraphQLUnionType({
  name: "AnimeOrError",
  types: [AnimeType, ErrorType],
  resolveType: (value) => {
    return value.id ? AnimeType : ErrorType;
  },
});

export default AnimeType;
