import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import ICreateUser from "../../../dtos/ICreateUser";
import { hash } from "bcryptjs";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(user: ICreateUser): Promise<User> {
    const newUser = this.ormRepository.create(user);
    newUser.password = await hash(user.password, 8);
    return this.ormRepository.save(newUser);
  }

  public async findByUsername(username: string): Promise<User|undefined> {
    return this.ormRepository.findOne({ where: { username }});
  }
}

export default UsersRepository;