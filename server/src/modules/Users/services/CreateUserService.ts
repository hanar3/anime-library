import AppError from "@shared/Error/AppError";
import { inject, injectable } from "tsyringe";
import * as Yup from 'yup';
import ICreateUser from "../infra/dtos/ICreateUser";
import { User } from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";
@injectable()
export default class CreateUserSerivce {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}
  public async execute({ username, email, password }: ICreateUser): Promise<User | undefined> {
    const schema = Yup.object().shape({
      username: Yup.string().required("Username is a required field"),
      email: Yup.string().email().required("Email is a required field"),
      password: Yup.string().required("A password is required"),
    });

    try { 
      await schema.validate({ username, email, password });
      const userExists = await this.usersRepository.findByUsername(username);

      if (userExists)
        throw new AppError({ code: 401, message: 'A user with this username already exists' });

      const user = await this.usersRepository.create({ username, email, password });
      return user;
    } catch(err) {
      throw err;  
    }
  }
}
