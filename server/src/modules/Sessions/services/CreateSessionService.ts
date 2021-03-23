import IUsersRepository from "@modules/Users/repositories/IUsersRepository";
import AppError from "@shared/Error/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import ICreateSession from "../dtos/ICreateSession";

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ){}

  public async execute(data: ICreateSession) {
    const { username, password } = data;

    const user = await this.usersRepository.findByUsername(username);
  
    if (!user) throw new AppError({ code: 401, message: 'Wrong username or password' });
    
    const passwordMatches = await compare(password, user.password);
    
    if (!passwordMatches) throw new AppError({ code: 401, message: 'Wrong username or password' });

    const token = sign({ userId: user.id, email: user.email }, 'ssssh-secret', { expiresIn: '1d' })
    return { token };  
  }
}