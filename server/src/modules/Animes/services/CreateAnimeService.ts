import Anime from "@modules/Animes/infra/typeorm/entities/Anime";
import { injectable, inject } from 'tsyringe';
import ICreateAnime from "../dtos/ICreateAnimeDTO";
import IAnimesRepository from "../repositories/IAnimesRepository";

@injectable()
export default class AddAnimeService {
  constructor(
    @inject('AnimesRepository')
    private animesRepository: IAnimesRepository
  ) {}

  public async execute(data: ICreateAnime): Promise<Anime> {
    const anime = this.animesRepository.create(data);
    return anime;
  }
}
