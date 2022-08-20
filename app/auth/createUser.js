import { db } from "../database/index.js";

export async function createUser(username, password) {
  await db.none('INSERT INTO users(username, password) VALUES($1, $2);', [username, password]);
}
