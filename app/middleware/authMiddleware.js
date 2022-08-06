import { verifyToken } from '../auth/verifyToken.js';
import { getUser } from '../auth/getUser.js';

function getTokenFromHeader(req) {
  const { headers } = req;
  const authHeader = headers.authorization || '';
  const bearer = authHeader.match(/Bearer (\S*)/) || [];
  const token = bearer[1];
  return token;
}

function getUserIdFromToken(token) {
  try {
    const { userId } = verifyToken(token);
    return userId;
  } catch (error) {
    return null;
  }
}

export const authMiddleware = async (req, res, next) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(403).send('A token is required for authentication.');
  }

  const userId = getUserIdFromToken(token);
  if (!userId) {
    return res.status(401).send('Invalid token.');
  }

  const user = getUser(userId);
  req.user = user;
  next();
};
