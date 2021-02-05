import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Error',
  fields: {
    message: {
      type: GraphQLString,
    },
    code: {
      type: GraphQLInt,
    }
  }
})