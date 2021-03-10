import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLUnionType,
} from "graphql";

import ErrorType from "../../shared/Error/ErrorType";
import { GraphQLDateTime } from "graphql-iso-date";

export const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    statusMessage: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },

    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});

export default new GraphQLUnionType({
  name: "UserOrError",
  types: [UserType, ErrorType],
  resolveType: (value) => {
    return value.id ? UserType : ErrorType;
  },
});
