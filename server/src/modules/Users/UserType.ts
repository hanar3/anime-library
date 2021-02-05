import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLUnionType, graphqlSync } from "graphql";

import ErrorType from '../Error/ErrorType';
import { GraphQLDateTime } from "graphql-iso-date";

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    }
  }
});


export default new GraphQLUnionType({
  name: 'UserOrError',
  types: [UserType, ErrorType],
  resolveType: (value) => {
    return value.id ? UserType : ErrorType;
  }
});