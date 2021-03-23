import CreateUserSerivce from "@modules/Users/services/CreateUserService";
import AppError from "@shared/Error/AppError";
import { ApolloError } from "apollo-server-errors";
import { container } from "tsyringe";
import { Arg, Mutation, Resolver } from "type-graphql";
import { CreateUser, User } from "./Types";

@Resolver(User)
export default class UserResolver {
  @Mutation(() => User, { nullable: true })
  public async createUser(@Arg('input') user: CreateUser): Promise<User> {
    try {
      const createUser = container.resolve(CreateUserSerivce);
      const newUser = await createUser.execute(user);
      return newUser;
    } catch(err) {
      if (err instanceof AppError) {
        throw new ApolloError(err.message, String(err.code));
      }
    }
  }
}
