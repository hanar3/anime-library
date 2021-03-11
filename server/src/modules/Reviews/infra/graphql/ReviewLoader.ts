import { getRepository } from "typeorm";
import isAuthenticated from "@shared/middlewares/isAuthenticated";
import Review from "../typeorm/entities/Review";

const repository = getRepository(Review);

export async function getReviews() {
  const reviews = await repository
    .createQueryBuilder("review")
    .innerJoinAndSelect("review.user", "user")
    .innerJoinAndSelect("review.anime", "anime")
    .getMany();

  return reviews;
}

interface CreateReviewInput {
  anime: string;
  user: number;
  rating: number;
}

export async function createReview(_, { input }: { input: CreateReviewInput }) {
  try {
    const review = repository.create(input);
    await repository.save(review);
    return review;
  } catch (err) {
    console.log(err);
    return { code: 500, message: "Unknown error" };
  }
}

interface DeleteReviewInput {
  reviewId: string;
}

export async function deleteReview(_, { input }: { input: DeleteReviewInput }) {
  try {
    const review = await repository.findOne(input.reviewId);
    if (!review) {
      return { code: 404, message: "Review not found" };
    }
    await repository.remove(review);
    return review;
  } catch (err) {
    console.log(err);
    return { code: 500, message: "Unknown error" };
  }
}

export const getUserReviews = isAuthenticated(async (root, args, context) => {
  const currentUser = context.currentUser as { userId: number; email: string };
  if (currentUser) {
    try {
      const { userId } = currentUser;
      const reviews = await repository
        .createQueryBuilder("review")
        .innerJoinAndSelect("review.anime", "anime")
        .innerJoinAndSelect("review.user", "user")
        .where("user.id = :userId", { userId })
        .getMany();
      return { result: reviews };
    } catch (err) {
      console.log(err);
      return { code: 500, message: "Internal server error" };
    }
  }
});
