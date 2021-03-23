import { Field, InputType, ObjectType } from "type-graphql";
import ICreateUser from "../../dtos/ICreateUser";

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  statusMessage: string;
}

@InputType()
export class CreateUser implements ICreateUser {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}