import AppError from '@shared/Error/AppError';
import { inject, injectable } from 'tsyringe';
import Anime from '../infra/typeorm/entities/Anime';
import IAnimesRepository from '../repositories/IAnimesRepository';

@injectable()
export default class ShowAnimeService {
  constructor(
    @inject('AnimesRepository')
    public animesRepository: IAnimesRepository
  ) {}
  /**
   * execute
   */
  public async execute(animeId: string): Promise<Anime> {
    const anime = await this.animesRepository.findById(animeId);
    if (!anime) throw new AppError({ code:404, message: 'Anime not found' });
    return anime;
  }
}