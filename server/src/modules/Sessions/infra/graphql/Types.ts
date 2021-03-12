import ICreateSession from "@modules/Sessions/dtos/ICreateSession";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Session {
  @Field()
  token: string;
}

@InputType()
export class SessionCreateInput implements ICreateSession{
  @Field()
  username: string;

  @Field()
  password: string;
}