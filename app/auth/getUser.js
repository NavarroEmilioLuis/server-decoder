import { USERS } from './users.js';

export async function getUser(username) {
  return USERS.find((user) => user.username === username) || null;
}
