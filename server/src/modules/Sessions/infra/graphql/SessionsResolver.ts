import CreateSessionService from "@modules/Sessions/services/CreateSessionService";
import { container } from "tsyringe";
import { Arg, Mutation, Resolver } from "type-graphql";
import { Session, SessionCreateInput } from "./Types";

@Resolver(Session)
export default class SessionsResolver {
  @Mutation(() => Session)
  public async sessionCreate(@Arg('input') input: SessionCreateInput): Promise<Session>{
    const sessionCreate = container.resolve(CreateSessionService);

    try {
      const session = await sessionCreate.execute(input);
      return session;
    } catch {
      return null;
    }
  }
}