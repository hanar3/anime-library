import { Anime } from "@modules/Animes/infra/graphql/Types";
import { User } from "@modules/Users/infra/graphql/Types";
import { Field, InputType, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Review {
  @Field()
  id: string;

  @Field()
  user: User;

  @Field()
  anime: Anime;

  @Field((type) => Int)
  rating: number;
}

@ObjectType()
export class CreateReviewResponse {
  @Field()
  id: string;

  @Field()
  user: number;

  @Field()
  anime: string;

  @Field((type) => Int)
  rating: number;
}

@ObjectType()
export class DeleteReviewResponse {
  @Field()
  ok: boolean;
}

@InputType()
export class CreateReviewInput {
  @Field()
  user: number;

  @Field()
  anime: string;

  @Field((type) => Int)
  rating: number;
}

