import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

import AppError from "@shared/Error/AppError";
import AddAnimeService from "@modules/Animes/services/CreateAnimeService";
import UpdateAnimeService from "../../services/UpdateAnimeService";
import ListAnimesService from '@modules/Animes/services/ListAnimesService';
import IUpdateAnimeDTO from '@modules/Animes/dtos/IUpdateAnimeDTO';
import ShowAnimeService from '@modules/Animes/services/ShowAnimeService';

export async function list(_, { input }) {
  const limit = 10;
  const listAnimes = container.resolve(ListAnimesService);

  const [animes, count] = await listAnimes.execute({
    take: limit,
    skip: input.page * limit,
  });

  return animes;
}

export async function show(_, { input }: { input: { id: string } }) {
  try {
    const showAnime = container.resolve(ShowAnimeService);

    const anime = await showAnime.execute(input.id);
    if (!anime) return { code: 404, message: "Not found" };
    return anime;
  } catch(e) {
    return { code: 500, message: 'Unknown Error'};

  }
}

export async function store(_: any, { input }) {
  try {
    const addAnime = container.resolve(AddAnimeService);
    const anime = await  addAnime.execute(input);
    return anime;
  } catch (err) {
    console.log(err);
  }
}

export async function update(_, { input }: { input: IUpdateAnimeDTO }) {
  try {
    const updateAnime = container.resolve(UpdateAnimeService);
    const updatedAnime = await updateAnime.execute(input);
    return updatedAnime;
  } catch (err) {
    if (err instanceof AppError) {
      return { message: err.message, code: err.code };
    }
    return { code: 500, message: "Unkown Error" };
  }
}
