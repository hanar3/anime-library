import { inject, injectable } from "tsyringe";
import Anime from "../infra/typeorm/entities/Anime";
import IAnimesRepository from "../repositories/IAnimesRepository";

@injectable()
export default class ListAnimesService {
  constructor(
    @inject('AnimesRepository')
    private animesRepository: IAnimesRepository
  ) {}

  public async execute({ take, skip }: { take: number; skip: number; }): Promise<[Anime[], number]> {
    const [animes, count] = await this.animesRepository.findAndCount({ take, skip }); 
    return [animes, count];
  }
}