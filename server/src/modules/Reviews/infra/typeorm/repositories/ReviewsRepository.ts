import ICreateReview from "@modules/Reviews/dtos/ICreateReview";
import IReviewsRepository from "@modules/Reviews/repositories/IReviewsRepository";
import { getRepository, Repository } from "typeorm";
import Review from "../entities/Review";

export default class AnimesRepository implements IReviewsRepository {
  private ormRepository: Repository<Review>;
  constructor() {
    this.ormRepository = getRepository(Review);
  }
  public async create(data: ICreateReview):Promise<Review> {
    const review = this.ormRepository.create(data);
    return this.ormRepository.save(review);
  } 

  public async findOne(reviewId: string): Promise<Review | undefined> {
    const review = await this.ormRepository.findOne(reviewId);
    return review;
  }

  public async findAll(): Promise<Review[]> {
    const reviews = await this.ormRepository
    .createQueryBuilder("review")
    .innerJoinAndSelect("review.user", "user")
    .innerJoinAndSelect("review.anime", "anime")
    .getMany();

    return reviews;
  }
  
  public async remove(review: Review): Promise<void> {
    await this.ormRepository.remove(review);
  }

}