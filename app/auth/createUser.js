import { USERS } from './users.js';

export function createUser(username, password) {
  USERS.push({ username, password });
}
