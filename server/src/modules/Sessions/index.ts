import { GraphQLInputObjectType, GraphQLString } from "graphql";

import { SesssionOrError } from "./SessionType";
import { createSession } from './SessionLoader';

export const mutations = {
  sessionCreate: {
    type: SesssionOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'SessionCreateInput',
          fields: {
            username: {
              type: GraphQLString,
            },
            password: {
              type: GraphQLString,
            }
          }
        })
      }
    },
    resolve: createSession,
  }
}
