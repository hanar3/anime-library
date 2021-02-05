import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql';
import { createUser, getUsers } from './UserLoader';

import UserType from './UserType';

export const queries = {
  users: {
    type:GraphQLList(UserType),
    resolve: getUsers,
  }
};

export const mutations = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "CreateUser",
          fields: {
            email: {
              type: GraphQLString,
            },
            username: {
              type: GraphQLString
            },
            password: {
              type: GraphQLString,
            }
          }
        })
      }
    },
    resolve: createUser,
  }
}