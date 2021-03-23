import AppError from "@shared/Error/AppError";
import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repositories/IUsersRepository";

@injectable()
export default class ShowUserService {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  public async execute(userId: string) {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new AppError({ message: "User not found", code: 404 });
    return user;
  }
}
