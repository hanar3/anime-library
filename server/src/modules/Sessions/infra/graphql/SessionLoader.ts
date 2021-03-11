import * as Yup from 'yup';
import { User } from '@modules/Users/infra/typeorm/entities/User';
import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

interface IInput {
  username: string;
  password: string;
}

export async function createSession(_ ,{ input }: { input: IInput }) {
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is a required field'),
    password: Yup.string().required('A password is required'),
  });

  try {
    await schema.validate(input);
    const { username, password } = input as IInput;

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { username } });
  
    if (!user) return { message: 'User not found', code: 404 };
    
    const passwordMatches = await compare(password, user.password);
    
    if (!passwordMatches) return { message: 'Wrong username or password', code: 403 }

    const token = sign({ userId: user.id, email: user.email }, 'a28b609a2f78697eda98710f3a8e424797fff38d', { expiresIn: '1d' })
    
    return { token };
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return { message: err.message, code: 401 };
    }
  }

  
}