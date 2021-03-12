import IAnimesRepository from "@modules/Animes/repositories/IAnimesRepository";
import AppError from "@shared/Error/AppError";
import { injectable, inject } from "tsyringe";
import ICreateReview from "../dtos/ICreateReview";
import Review from "../infra/typeorm/entities/Review";
import IReviewsRepository from "../repositories/IReviewsRepository";

@injectable()
export default class CreateReviewService {
  constructor(
    @inject("ReviewsRepository") private reviewsRepository: IReviewsRepository,
    @inject("AnimesRepository") private animesRepository: IAnimesRepository
  ) {}

  public async execute(data: ICreateReview): Promise<Review> {
    const animeExists = await this.animesRepository.findById(data.anime);
    if (!animeExists)
      throw new AppError({
        code: 404,
        message: "Trying to create a review to an anime that doesn't exist",
      });
    
    if(data.rating < 0) {
      throw new AppError({
        code: 400,
        message: "Rating should be a positive value",
      });
    }

    return this.reviewsRepository.create(data);
  }
}
