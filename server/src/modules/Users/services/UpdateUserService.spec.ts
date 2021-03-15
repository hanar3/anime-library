import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository"
import UpdateUserService from './UpdateUserService';

describe("UpdateUser", () => {
  it("Should be able to update an existing user", async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    fakeUsersRepository.seed();
    
    const user = await fakeUsersRepository.findByUsername('testuser1');
    const updateUser = new UpdateUserService(fakeUsersRepository);
    const newUser = await updateUser.execute({ id: user.id, username:'hanar3'  });
    expect(newUser.username).toBe('hanar3');
  })
})