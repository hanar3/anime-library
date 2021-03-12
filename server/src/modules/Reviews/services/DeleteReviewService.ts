import AppError from "@shared/Error/AppError";
import { inject, injectable } from "tsyringe";
import IReviewsRepository from "../repositories/IReviewsRepository";

@injectable()
export default class DeleteReviewService {
  constructor(@inject('ReviewsRepository') private reviewsRepository: IReviewsRepository) {}
  public async excute(reviewId: string): Promise<void> {
    const review = await this.reviewsRepository.findOne(reviewId); 
    if (!review) throw new AppError({ message: 'Not found', code: 404 });
    return this.reviewsRepository.remove(review);
  } 
}