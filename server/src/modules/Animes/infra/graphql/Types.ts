import PagiantedResponse from "@shared/infra/graphql/types/PaginatedResponse";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Anime {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  englishName?: string;

  @Field()
  description?: string;

  @Field()
  japaneseName?: string;

  @Field()
  episodes?: number;

  @Field()
  status: string;
  
  @Field({ nullable: true })
  banner: string;
}

@ObjectType()
export class PaginatedAnimesResponse extends PagiantedResponse<Anime>(Anime) {}

/**
 * IndexInput
 * input required to list animes
 */
@InputType()
export class IndexInput {
  @Field()
  page: number;
  
  @Field()
  limit: number;
}

/**
 * ShowInput
 * gets an anime by id
 */
@InputType()
export class ShowInput {
  @Field()
  id: string;
}

/**
 * StoreInput
 * input required to create an anime
 */
@InputType()
export class StoreInput {
  @Field()
  name: string;

  @Field()
  englishName?: string;

  @Field()
  description: string;

  @Field()
  japaneseName?: string;

  @Field()
  episodes: number;

  @Field()
  status: string;
}


/**
 * UpdateInput
 * input required to create an anime
 */
 @InputType()
 export class UpdateInput {
  @Field()
  id: string;

   @Field()
   name?: string;
 
   @Field()
   englishName?: string;
 
   @Field()
   description?: string;
 
   @Field()
   japaneseName?: string;
 
   @Field()
   episodes?: number;
 
   @Field()
   status?: string;
 }