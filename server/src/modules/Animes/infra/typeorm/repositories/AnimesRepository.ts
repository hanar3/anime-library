import { getRepository, Repository } from "typeorm";
import IAnimesRepository from "@modules/Animes/repositories/IAnimesRepository";
import Anime from "../entities/Anime";
import ICreateAnimeDTO from "@modules/Animes/dtos/ICreateAnimeDTO";

export default class AnimesRepository implements IAnimesRepository {
  private ormRepository: Repository<Anime>;

  constructor() {
    this.ormRepository = getRepository(Anime);
  }

  public async create(data: ICreateAnimeDTO): Promise<Anime> {
    const anime = this.ormRepository.create(data);
    await this.ormRepository.save(data);
    return anime;
  }

  public async findById(id: string): Promise<Anime | undefined> {
    const anime = await this.ormRepository.findOne(id);
    return anime || undefined;
  }
  
  public async save(anime: Anime): Promise<Anime> {
    const updatedAnime = await this.ormRepository.save(anime);
    return updatedAnime;
  }

  public async findAndCount(takeAndSkip: { take: number; skip: number; }) {
    const results = await this.ormRepository.findAndCount(takeAndSkip);
    return results;
  }

}