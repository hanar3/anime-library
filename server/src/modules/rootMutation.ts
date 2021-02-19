import { mutations as animeMutations } from "./Animes";
import { mutations as reviewMutations } from "./Reviews";
import { mutations as sessionMutations } from "./Sessions";
import { mutations as userMutations } from "./Users";

export default {
  ...animeMutations,
  ...userMutations,
  ...sessionMutations,
  ...reviewMutations,
};
