import CreateUserSerivce from "@modules/Users/services/CreateUserService";
import { container } from "tsyringe";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUser, User } from "./Types";

@Resolver(User)
export default class UserResolver {
  @Mutation(() => User, { nullable: true })
  public async createUser(@Arg('input') user: CreateUser): Promise<User> {
    try {
      const createUser = container.resolve(CreateUserSerivce);
      const newUser = await createUser.execute(user);
      return newUser;
    } catch {}
  }
}
