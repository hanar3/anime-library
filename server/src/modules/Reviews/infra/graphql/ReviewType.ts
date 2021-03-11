import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLUnionType,
} from "graphql";

import AnimeType from "@modules/Animes/infra/graphql/AnimeType";
import ErrorType from "@shared/Error/ErrorType";
import { UserType } from "@modules/Users/infra/graphql/UserType";

const ReviewType = new GraphQLObjectType({
  name: "Review",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    user: {
      type: UserType,
    },
    anime: {
      type: AnimeType,
    },
    rating: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
});

export const ReviewListType = new GraphQLObjectType({
  name: "ReviewList",
  fields: {
    result: {
      type: GraphQLList(ReviewType),
    },
  },
});

export const ReviewOrError = new GraphQLUnionType({
  name: "ReviewOrError",
  types: [ReviewType, ErrorType],
  resolveType: (value) => {
    return value.id ? ReviewType : ErrorType;
  },
});

export const ReviewListOrError = new GraphQLUnionType({
  name: "ReviewListOrError",
  types: [ReviewListType, ErrorType],
  resolveType: (value) => {
    return value.result ? ReviewListType : ErrorType;
  },
});

export default ReviewType;