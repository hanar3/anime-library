import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from "graphql";
import { getAnimes, saveAnime } from "./AnimeLoader";

import AnimeType from "./AnimeType";

export const queries = {
  animes: {
    type: GraphQLList(AnimeType),
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "GetAnimesInput",
          fields: {
            page: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },
    resolve: getAnimes,
  },
};

export const mutations = {
  saveAnime: {
    type: AnimeType,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "AnimeInput",
          fields: {
            name: {
              type: GraphQLString,
            },
            englishName: {
              type: GraphQLString,
            },
            description: {
              type: GraphQLString,
            },
          },
        }),
      },
    },

    resolve: saveAnime,
  },
};
