import { db } from '../database/index.js';

export async function getUser(username) {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
}
