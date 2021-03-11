import { inject, injectable } from "tsyringe";
import fs from 'fs';
import path from 'path';
import AppError from "@shared/Error/AppError";
import { tmpFolderPath } from "@config/upload";
import IAnimesRepository from "../repositories/IAnimesRepository";
import Anime from "../infra/typeorm/entities/Anime";

@injectable()
export default class UpdateAnimeBannerService {
  constructor(
    @inject('AnimesRepository')
    private animesRepository: IAnimesRepository
  ){}

  public async execute({ animeId, file }: { animeId: string, file: Express.Multer.File }): Promise<Anime> {
    const anime = await this.animesRepository.findById(animeId);
    if (!anime) throw new AppError({ message: 'Anime does not exist', code: 404 });
    if (!file) throw new AppError({ code: 400, message: "File not provided" });

    if (anime.banner) {
      // Delete previous banner... 
      fs.unlink(path.resolve(tmpFolderPath, anime.banner), (err) => {
        if (err) console.log('Error deleting file: '+ anime.banner + ` ${err.message}`);
      });
    }

    anime.banner = file.filename;
    this.animesRepository.save(anime);

    return anime;
      
  }
}