import { inject, injectable } from "tsyringe";
import Review from "../infra/typeorm/entities/Review";
import IReviewsRepository from "../repositories/IReviewsRepository";

@injectable()
export default class ListReviewsService {
  constructor(
    @inject("ReviewsRepository") private reviewsRepository: IReviewsRepository
  ) {}
  
  public async execute(): Promise<Review[]> {
    return this.reviewsRepository.findAll();
  }
}
