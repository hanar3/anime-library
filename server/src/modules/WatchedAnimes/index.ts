import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from "graphql";
import WatchedAnimeType, {
  WatchedAnimeListOrError,
  WatchedAnimeOrError,
} from "./WatchedAnimeType";
import {
  createWatchedAnime,
  getUserLibrary,
  getWatchedAnimes,
} from "./WatchedAnimeLoader";

export const queries = {
  watchedAnimes: {
    type: GraphQLList(WatchedAnimeType),
    resolve: getWatchedAnimes,
  },
  userLibrary: {
    type: WatchedAnimeListOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "UserLibraryInput",
          fields: {
            userId: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },
    resolve: getUserLibrary,
  },
};

export const mutations = {
  addToList: {
    type: WatchedAnimeOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "WatchedAnimeCreateInput",
          fields: {
            anime: {
              type: GraphQLString,
            },
            user: {
              type: GraphQLInt,
            },
            rating: {
              type: GraphQLInt,
            },
            watchedEpisodes: {
              type: GraphQLInt,
            },
            status: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
    resolve: createWatchedAnime,
  },
};
