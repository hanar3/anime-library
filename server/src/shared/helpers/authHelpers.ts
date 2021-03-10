import { verify } from 'jsonwebtoken';

interface IDecodedToken {
  userId: string | null;
  email: string | null;
}
export default function tradeTokenForUser(bearerToken: string): IDecodedToken {
  const [, token] = bearerToken.split(' ');

  const decoded = verify(token, 'a28b609a2f78697eda98710f3a8e424797fff38d');
  if (decoded) {
    return decoded as IDecodedToken;
  }
  return { userId: null, email: null }
}