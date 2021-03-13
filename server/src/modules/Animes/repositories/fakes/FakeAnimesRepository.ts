import { v4 as uuid } from 'uuid';
import IAnimesRepository from "@modules/Animes/repositories/IAnimesRepository";
import Anime from "../../infra/typeorm/entities/Anime";
import ICreateAnimeDTO from "@modules/Animes/dtos/ICreateAnimeDTO";

export default class AnimesRepository implements IAnimesRepository {
  private animes: Anime[] = [];


  public async create(data: ICreateAnimeDTO): Promise<Anime> {
    const anime = new Anime();
    Object.assign(anime, { id: uuid() }, data);

    return anime;
  }

  public async findById(id: string): Promise<Anime | undefined> {
    return this.animes.find(anime => anime.id === id);
  }
  
  public async save(anime: Anime): Promise<Anime> {
    const savedAnime = this.animes.find(a => a.id === anime.id);
    Object.assign(savedAnime, anime);
    return savedAnime;
  }

  public async findAndCount(takeAndSkip: { take: number; skip: number; }): Promise<[Anime[], number]> {
    const { take, skip } = takeAndSkip;

    const total = this.animes.length - 1;
    const slice = this.animes.slice(skip - 1, skip + take);
    return [slice, total];
  }

  public seed(): void {
    for(let i = 0; i <= 1200; i++) {
      const anime = new Anime();
      const sampleAnime: ICreateAnimeDTO =  {
        name: 'test-'+i,
        description: "Description",
        episodes: 25,
        status: 'Finished Airing',
      };
      
      Object.assign(anime, { id: `anime-${sampleAnime.name}`, ...sampleAnime  });

      this.animes.push(anime)
    }
  }

}