import express from 'express';
import { getToken } from '../auth/getToken.js';

export const login = express.Router();

login.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username or password is missing.');
  }

  // Try to login user with sent credentials
  const token = await getToken(username, password);
  if (!token) {
    return res.status(401).send('Unable to authenticate user.');
  }

  res.send({ token });
});
