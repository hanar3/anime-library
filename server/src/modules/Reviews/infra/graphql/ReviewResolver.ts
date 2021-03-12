import CreateReviewService from "@modules/Reviews/services/CreateReviewService";
import DeleteReviewService from "@modules/Reviews/services/DeleteReviewService";
import ListReviewsService from "@modules/Reviews/services/ListReviewsService";
import { container } from "tsyringe";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateReviewInput, CreateReviewResponse, DeleteReviewResponse, Review } from "./Types";

@Resolver(Review)
export default class ReviewsResolver {
  @Query(() => [Review])
  public async reviews() {
    const listReviews = container.resolve(ListReviewsService);
    const reviews = await listReviews.execute();
    return reviews;
  }

  @Mutation(() => CreateReviewResponse)
  public async createReview(@Arg('input') input: CreateReviewInput) {
    const createReview = container.resolve(CreateReviewService);
    const review = await createReview.execute(input);
    return review;
  }

  @Mutation(() => DeleteReviewResponse)
  public async deleteReview(@Arg('id') id: string){ 
    const deleteReview = container.resolve(DeleteReviewService);
    try {
      await deleteReview.excute(id);
      return { ok: true };
    } catch {
      return { ok: false };
    }
  }
}