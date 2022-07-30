import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from './secret.js';

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET_KEY);
}
