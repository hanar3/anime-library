import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repositories/IUsersRepository";
import IUpdateUser from '../dtos/IUpdateUser';
import { User } from "../infra/typeorm/entities/User";

@injectable()
export default class UpdateUserSerivce {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}
  public async execute(data: IUpdateUser): Promise<User> {

  } 
}