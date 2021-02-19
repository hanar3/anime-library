import { queries as animeQueries } from "./Animes";
import { queries as reviewQueries } from "./Reviews";
import { queries as userQueries } from "./Users";

export default { ...animeQueries, ...userQueries, ...reviewQueries };
