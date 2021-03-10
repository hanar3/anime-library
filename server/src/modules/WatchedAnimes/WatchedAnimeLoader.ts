import WatchedAnime from "./entity/WatchedAnime";
import { getRepository } from "typeorm";
import isAuthenticated from "../../shared/middlewares/isAuthenticated";

const repository = getRepository(WatchedAnime);

export async function getWatchedAnimes() {
  const reviews = await repository
    .createQueryBuilder("watchedAnimes")
    .innerJoinAndSelect("watchedAnimes.anime", "anime")
    .getMany();

  return reviews;
}

interface AddWatchedAnime {
  user: number;
  anime: string;
  rating: number;
  status: string;
  watchedEpisodes: number;
}

export async function createWatchedAnime(
  _,
  { input }: { input: AddWatchedAnime }
) {
  try {
    const watchedAnime = repository.create(input);
    await repository.save(watchedAnime);

    return watchedAnime;
  } catch (err) {
    console.log(err);
    return { code: 500, message: "Unknown error" };
  }
}

interface GetUserList {
  userId: number;
}

export async function getUserLibrary(_, { input }: { input: GetUserList }) {
  try {
    const library: Array<WatchedAnime> = await repository
      .createQueryBuilder("watchedAnimes")
      .innerJoinAndSelect("watchedAnimes.anime", "anime")
      .where("watchedAnimes.userId = :userId", { userId: input.userId })
      .getMany();
    return { result: library };
  } catch (err) {
    console.log(err);
    return { code: 500, message: "Internal Server Error" };
  }
}

export async function removeAnimeFromLibrary() {}
