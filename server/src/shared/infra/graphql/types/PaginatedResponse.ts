import { ClassType, Field, Int, ObjectType } from "type-graphql";

export default function PagiantedResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field(type => [TItemClass])
    items: TItem[];

    @Field(type => Int)
    total: number;

    @Field()
    hasMore: boolean;
  }
  return PaginatedResponseClass;

}