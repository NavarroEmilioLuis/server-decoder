import { USERS } from './users.js';

export async function createUser(username, password) {
  USERS.push({ username, password });
}
