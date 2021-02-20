import UpdateAnimeService, {
  IUpdateAnimeData,
} from "../../services/UpdateAnimeService";

import Anime from "../../entity/Anime";
import AppError from "../../AppError";
import { getRepository } from "typeorm";

const repository = getRepository(Anime);

export async function list(_, { input }) {
  const limit = 10;
  const [animes] = await repository.findAndCount({
    take: limit,
    skip: input.page * limit,
  });

  return animes;
}

export async function show(_, { input }: { input: { id: string } }) {
  try {
    const anime = await repository.findOne(input.id);
    if (!anime) return { code: 404, message: "Not found" };
    return anime;
  } catch {}
}

export async function store(_: any, { input }) {
  try {
    const anime = repository.create(input);
    await repository.save(anime);
    return anime;
  } catch (err) {
    console.log(err);
  }
}

export async function update(_, { input }: { input: IUpdateAnimeData }) {
  try {
    const updateAnime = new UpdateAnimeService();
    const updatedAnime = await updateAnime.execute(input);
    return updatedAnime;
  } catch (err) {
    if (err instanceof AppError) {
      return { message: err.message, code: err.code };
    }
    return { code: 500, message: "Unkown Error" };
  }
}
