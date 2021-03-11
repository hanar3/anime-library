import { mutations as animeMutations } from "./Animes/infra/graphql";
import { mutations as reviewMutations } from "./Reviews/infra/graphql";
import { mutations as sessionMutations } from "./Sessions/infra/graphql";
import { mutations as userMutations } from "./Users/infra/graphql";
import { mutations as watchedAnimeMutations } from "./WatchedAnimes/infra/graphql";

export default {
  ...animeMutations,
  ...userMutations,
  ...sessionMutations,
  ...reviewMutations,
  ...watchedAnimeMutations,
};
