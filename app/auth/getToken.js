import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET_KEY from './secret.js';
import { getUser } from './getUser.js';

export async function getToken(username, password) {
  const user = getUser(username);
  const isPasswordMatch = await bcrypt.compare(password, user?.password);

  if (!user || isPasswordMatch === false) {
    throw new Error('Unable to authenticate user');
  }

  const token = jwt.sign({ userId: username }, JWT_SECRET_KEY, {
    expiresIn: '2h',
  });

  return token;
}
