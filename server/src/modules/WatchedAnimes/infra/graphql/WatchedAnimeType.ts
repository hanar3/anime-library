import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLUnionType,
} from "graphql";

import AnimeType from "@modules/Animes/infra/graphql/AnimeType";
import ErrorType from "@shared/Error/ErrorType";

const WatchedAnimeType = new GraphQLObjectType({
  name: "WatchedAnime",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    anime: {
      type: AnimeType,
    },
    watchedEpisodes: {
      type: GraphQLNonNull(GraphQLInt),
    },
    status: {
      type: GraphQLString,
    },
    rating: {
      type: GraphQLInt,
    },
  },
});

export const WatchedAnimeList = new GraphQLObjectType({
  name: "WatchedAnimeList",
  fields: {
    result: {
      type: GraphQLList(WatchedAnimeType),
    },
  },
});

export const WatchedAnimeOrError = new GraphQLUnionType({
  name: "WatchedAnimeOrError",
  types: [WatchedAnimeType, ErrorType],
  resolveType: (value) => {
    return value.id ? WatchedAnimeType : ErrorType;
  },
});

export const WatchedAnimeListOrError = new GraphQLUnionType({
  name: "WatchedAnimeListOrError",
  types: [WatchedAnimeList, ErrorType],
  resolveType: (value) => {
    return value.result ? WatchedAnimeList : ErrorType;
  },
});

export default WatchedAnimeType;
