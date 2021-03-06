import { container } from 'tsyringe';
import  IAnimesRepository from '@modules/Animes/repositories/IAnimesRepository';
import  AnimesRepository from '@modules/Animes/infra/typeorm/repositories/AnimesRepository';
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository';
import IReviewsRepository from '@modules/Reviews/repositories/IReviewsRepository';
import ReviewsRepository from '@modules/Reviews/infra/typeorm/repositories/ReviewsRepository';
container.registerSingleton<IAnimesRepository>('AnimesRepository', AnimesRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IReviewsRepository>('ReviewsRepository', ReviewsRepository);