import { GraphQLError, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLUnionType, } from "graphql";

import ErrorType from '../../shared/Error/ErrorType';

const SessionType = new GraphQLObjectType({
  name: 'Session',
  fields: {
    token: {
      type: GraphQLNonNull(GraphQLString),
    }
  }
});

export const SesssionOrError = new GraphQLUnionType({
  name: 'SessionOrError',
  types: [SessionType, ErrorType],
  resolveType: (value) => {
    return value.token ? SessionType : ErrorType;
  },
})

export default SessionType;