import { getRepository, Repository } from "typeorm";
import IAnimesRepository from "@modules/Animes/repositories/IAnimesRepository";
import Anime from "../../infra/typeorm/entities/Anime";
import ICreateAnimeDTO from "@modules/Animes/dtos/ICreateAnimeDTO";

export default class AnimesRepository implements IAnimesRepository {
  private animes: Anime[];


  public async create(data: ICreateAnimeDTO): Promise<Anime> {
    const anime = new Anime();
  }

  public async findById(id: string): Promise<Anime | undefined> {
  }
  
  public async save(anime: Anime): Promise<Anime> {
  }

  public async findAndCount(takeAndSkip: { take: number; skip: number; }) {
  }

}