import { container } from 'tsyringe';
import  IAnimesRepository from '@modules/Animes/repositories/IAnimesRepository';
import  AnimesRepository from '@modules/Animes/infra/typeorm/repositories/AnimesRepository';
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository';
container.registerSingleton<IAnimesRepository>('AnimesRepository', AnimesRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);