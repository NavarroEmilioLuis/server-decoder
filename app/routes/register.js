import express from 'express';
import { getUser } from '../auth/getUser.js';
import { createPasswordHash } from '../auth/createPasswordHash.js';
import { createUser } from '../auth/createUser.js';

export const register = express.Router();

register.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username or password is missing.');
  }

  // Check if user already exists
  const user = getUser(username);
  if (user) {
    return res.status(409).send('Username already exists.');
  }

  // Save new user
  const encryptedPassword = await createPasswordHash(password);
  createUser(username, encryptedPassword);

  res.send('Successfully created new user.');
});
