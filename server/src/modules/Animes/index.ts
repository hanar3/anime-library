import * as anime from "./AnimeLoader";

import AnimeType, { AnimeOrError } from "./AnimeType";
import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

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
    resolve: anime.list,
  },

  anime: {
    type: AnimeOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "GetAnimeInput",
          fields: {
            id: {
              type: GraphQLNonNull(GraphQLString),
            },
          },
        }),
      },
    },
    resolve: anime.show,
  },
};

export const mutations = {
  createAnime: {
    type: AnimeType,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "AnimeCreateInput",
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
            japaneseName: {
              type: GraphQLString,
            },
            status: {
              type: GraphQLString,
            },
            episodes: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },

    resolve: anime.store,
  },

  updateAnime: {
    type: AnimeOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "UpdateAnimeInput",
          fields: {
            id: {
              type: GraphQLString,
            },
            name: {
              type: GraphQLString,
            },
            englishName: {
              type: GraphQLString,
            },
            description: {
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
          },
        }),
      },
    },
    resolve: anime.update,
  },
};
