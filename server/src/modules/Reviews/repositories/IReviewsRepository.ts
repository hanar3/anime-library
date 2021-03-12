import ICreateReview from "../dtos/ICreateReview";
import Review from "../infra/typeorm/entities/Review";

export default interface IReviewsRepository {
  findAll(): Promise<Review[]>;
  create(data: ICreateReview): Promise<Review>;
  findOne(id: string): Promise<Review>;
  remove(review: Review): void;
}