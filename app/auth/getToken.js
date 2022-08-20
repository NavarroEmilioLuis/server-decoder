import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from './secret.js';
import { getUser } from './getUser.js';

// Returns a token if the credentials are matched,
// otherwise returns null.
export async function getToken(username, password) {
  const user = await getUser(username);
  const encryptedPassword = user?.password || '';
  const isPasswordMatch = await bcrypt.compare(password, encryptedPassword);

  if (!user || isPasswordMatch === false) {
    return null;
  }

  const token = jwt.sign({ userId: username }, JWT_SECRET_KEY, {
    expiresIn: '2h',
  });

  return token;
}
