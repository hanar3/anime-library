import Anime from "../../entity/Anime";
import { getRepository } from "typeorm";

const repository = getRepository(Anime);

export async function getAnimes(_, { input }) {
  const limit = 10;
  const [animes, total] = await repository.findAndCount({
    take: limit,
    skip: input.page * limit,
  });

  return animes;
}

export async function saveAnime(_: any, { input }) {
  try {
    const anime = repository.create(input);
    await repository.save(anime);
    return anime;
  } catch (err) {
    console.log(err);
  }
}
