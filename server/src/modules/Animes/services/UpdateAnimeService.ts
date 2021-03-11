import Anime from "@modules/Animes/infra/typeorm/entities/Anime";
import AppError from "@shared/Error/AppError";
import IUpdateAnimeDTO from "../dtos/IUpdateAnimeDTO";
import IAnimesRepository from "../repositories/IAnimesRepository";
export default class UpdateAnimeService {
  constructor(private animesRepository: IAnimesRepository) {}

  public async execute(data: IUpdateAnimeDTO): Promise<Anime> {
    const anime = await this.animesRepository.findById(data.id);
    if (!anime) throw new AppError({ code: 404, message: "Anime not found" });
    delete data.id;
    const updatedAnime = Object.assign(anime, data);
    await this.animesRepository.save(updatedAnime);
    return updatedAnime;
  }
}
