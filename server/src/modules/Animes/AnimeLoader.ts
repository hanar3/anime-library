import Anime from '../../entity/Anime';
import { getRepository } from "typeorm";

const repository = getRepository(Anime);

export async function getAnimes() {
  const animes = await repository.find();
  return animes;
}


export async function saveAnime(_: any, { input }) {
  try {
    const anime = repository.create(input);
    await repository.save(anime);
    return anime;
  } catch(err) {
    console.log(err);
  }
}