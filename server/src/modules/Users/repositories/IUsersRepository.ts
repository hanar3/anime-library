import ICreateUser from "../infra/dtos/ICreateUser";
import { User } from "../infra/typeorm/entities/User";

export default interface IUsersRepository {
  create: (user: ICreateUser) => Promise<User>;
  findByUsername: (username: string) => Promise<User|undefined>;
}