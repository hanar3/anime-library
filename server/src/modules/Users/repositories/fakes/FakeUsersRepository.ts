import { v4 as uuid } from 'uuid';
import ICreateUser from "@modules/Users/infra/dtos/ICreateUser";
import { User } from "@modules/Users/infra/typeorm/entities/User";
import IUsersRepository from "../IUsersRepository";

export default class FakeUsersRepository implements IUsersRepository {
  users: User[] = [];
  public async create(data: ICreateUser): Promise<User> {
    const user = new User();
    Object.assign(user, { id: uuid(), ...data });
    this.users.push(user);
    return user;
  }

  public async findByUsername(username: string): Promise<User|undefined> {
    return this.users.find(u => u.username === username);
  }


  public seed(): void {
    for(let i = 0; i < 1200; i++) {
      const user = new User();
      const data: ICreateUser = {
        email: `a+${i}@a.com`,
        username: `testuser${i}`,
        password: '12345',
      }
      Object.assign(user, { id: uuid(), ...data });
      this.users.push(user);
    }
  }
}