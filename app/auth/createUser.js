import { db } from '../database/index.js';

// Returns a boolean indicating if the user was created
export async function createUser(username, password) {
  try {
    await db.tx(async (t) => {
      const user = await t.one(
        'INSERT INTO users(username, password) VALUES($1, $2) RETURNING id;',
        [username, password]
      );
      await t.none('INSERT INTO stats(user_id) VALUES($1);', [user.id]);
    });
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
}
