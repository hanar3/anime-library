import * as Yup from 'yup';

import { User } from '../../entity/User';
import { getRepository } from "typeorm";
import { hash } from 'bcryptjs';
import isAuthenticated from '../../middlewares/isAuthenticated';

const repository = getRepository(User);

export async function getUsers() {
  const users = await repository.find();
  return users;
}

export async function createUser(_: any, { input }) {
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is a required field'),
    email: Yup.string().required('Email is a required field'),
    password: Yup.string().required('A password is required'),
  });

  try {
    await schema.validate(input)
    const { username, email, password } = input as User;  // We can safely cast this now...

    const userExists = await repository.findOne({ where: { username } });

    if (userExists) return { code: 401, message: 'A user with this username already exists' };
    
    const user = repository.create({ username, email, password });
    user.password = await hash (user.password, 8);
    
    await repository.save(user);
    return user;
  } catch(err) {
    if (err instanceof Yup.ValidationError) {
      return { message: err.message, code: 401 };
    }
    return { message: 'Unknown error', code: 500 }
  }

}


export const profile = isAuthenticated(async (root, args,  context) => {
  const currentUser = context.currentUser as { userId: number; email: string; };
  if (currentUser) {
    try {
      const { userId } = currentUser;
      const user = await repository.findOne(userId);
      return user;
    } catch(err) {
      console.log(err);
      return { code: 500, message: 'Internal server error' }
    }
  }
});