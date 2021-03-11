import Anime from "@modules/Animes/infra/typeorm/entities/Anime";
import { getRepository } from "typeorm";

interface ICreateAnime {
  name: string;
  englishName?: string;
  description?: string;
  japaneseName?: string;
  episodes?: number;
  status: string;
}

export default class AddAnimeService {
  public async execute(data: ICreateAnime): Promise<Anime> {
    const animeRepository = getRepository(Anime);
    const anime = animeRepository.create(data);
    await animeRepository.save(anime);
    return anime;
  }
}
