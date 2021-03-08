import { queries as animeQueries } from "./Animes";
import { queries as reviewQueries } from "./Reviews";
import { queries as userQueries } from "./Users";
import { queries as watchedAnimeQueries } from "./WatchedAnimes";

export default {
  ...animeQueries,
  ...userQueries,
  ...reviewQueries,
  ...watchedAnimeQueries,
};
