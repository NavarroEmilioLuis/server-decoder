import { USERS } from './users.js';

export function getUser(username) {
  return USERS.find((user) => user.username === username) || null;
}
