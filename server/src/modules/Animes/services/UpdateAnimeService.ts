import Anime from "../entity/Anime";
import AppError from "../../../shared/Error/AppError";
import { getRepository } from "typeorm";

export interface IUpdateAnimeData {
  id: string;
  name?: string;
  englishName?: string;
  description?: string;
  japaneseName?: string;
  episodes?: number;
  status?: string;
}

export default class UpdateAnimeService {
  public async execute(data: IUpdateAnimeData): Promise<Anime> {
    const animeRepository = getRepository(Anime);
    const anime = await animeRepository.findOne(data.id);
    if (!anime) throw new AppError({ code: 404, message: "Anime not found" });
    delete data.id;
    const updatedAnime = Object.assign(anime, data);
    await animeRepository.save(updatedAnime);
    return updatedAnime;
  }
}
