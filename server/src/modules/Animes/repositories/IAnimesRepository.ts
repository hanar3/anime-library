import ICreateAnimeDTO from "../dtos/ICreateAnimeDTO";
import Anime from "../infra/typeorm/entities/Anime";

export default interface IAnimesRepository {
  create(data: ICreateAnimeDTO): Promise<Anime>;
  findById(id: string): Promise<Anime>;
  findAndCount(takeAndSkip: { take: number; skip: number; }): Promise<[Anime[], number]>;
  save(anime: Anime): Promise<Anime>;
}