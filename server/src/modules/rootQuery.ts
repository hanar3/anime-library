import { queries as animeQueries } from "./Animes/infra/graphql";
import { queries as reviewQueries } from "./Reviews/infra/graphql";
import { queries as userQueries } from "./Users/infra/graphql";
import { queries as watchedAnimeQueries } from "./WatchedAnimes/infra/graphql";

export default {
  ...animeQueries,
  ...userQueries,
  ...reviewQueries,
  ...watchedAnimeQueries,
};
