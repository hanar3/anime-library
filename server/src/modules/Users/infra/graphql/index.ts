import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql';
import { createUser, getUsers, profile } from './UserLoader';

import UserType from './UserType';

export const queries = {
  users: {
    type:GraphQLList(UserType),
    resolve: getUsers,
  },

  profile: {
    type: UserType,
    resolve: profile,
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