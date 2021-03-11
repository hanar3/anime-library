import { container } from 'tsyringe';
import  IAnimesRepository from '@modules/Animes/repositories/IAnimesRepository';
import  AnimesRepository from '@modules/Animes/infra/typeorm/repositories/AnimesRepository';
container.registerSingleton<IAnimesRepository>('AnimesRepository', AnimesRepository);