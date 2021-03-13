import AppError from "@shared/Error/AppError";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository"
import CreateUserSerivce from "./CreateUserService";
import * as Yup from 'yup';

describe("CreateUser",() => {
  it("Should be able to create an user", async () => {
    const fakeUsersReposistory = new FakeUsersRepository();
    const createUser = new CreateUserSerivce(fakeUsersReposistory);
    const user = await createUser.execute({
      email: 'a@a.com',
      username: 'johndoe',
      password: '1234',
    });
    expect(user).toHaveProperty('id');
  })

  it("Should not be able to create a user if the username already exists", async () => {
    expect.assertions(1);
    try {
      const fakeUsersReposistory = new FakeUsersRepository();
      fakeUsersReposistory.seed();

      const createUser = new CreateUserSerivce(fakeUsersReposistory); 
      await createUser.execute({
        email: 'a@a.com',
        username: 'testuser1',
        password: '1234',
      });
    } catch(err) {
      expect(err).toBeInstanceOf(AppError); 
    }
  })

  it("Should not be able to create a user if the email is invalid", async () => {
    expect.assertions(1);
    try {
      const fakeUsersReposistory = new FakeUsersRepository();
      const createUser = new CreateUserSerivce(fakeUsersReposistory); 
      await createUser.execute({
        email: 'invalidemail.com',
        username: 'testuser1',
        password: '1234',
      });
    } catch(err) {
      expect(err).toBeInstanceOf(Yup.ValidationError); 
    }
  })

  it("Should not be able to create a user if required data is not provided", async () => {
    expect.assertions(1);
    try {
      const fakeUsersReposistory = new FakeUsersRepository();
      const createUser = new CreateUserSerivce(fakeUsersReposistory); 
      await createUser.execute({
        email: '',
        username: '',
        password: '',
      });
    } catch(err) {
      expect(err).toBeInstanceOf(Yup.ValidationError); 
    }
  })
})