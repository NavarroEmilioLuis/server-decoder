export async function createTables(db) {
  console.log('Checking database tables...');

  // Create tables if they don't exist
  await db.none(
    `CREATE TABLE IF NOT EXISTS $1:name (
      id SERIAL PRIMARY KEY,
      username VARCHAR(32) NOT NULL UNIQUE,
      password TEXT NOT NULL,
      joined_at DATE NOT NULL DEFAULT CURRENT_DATE
    );`,
    ['users']
  );

  await db.none(
    `CREATE TABLE IF NOT EXISTS $1:name (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES $2:name($3:name),
      games_played INTEGER,
      max_streak INTEGER,
      current_streak INTEGER,
      score INTEGER
    );`,
    ['stats', 'users', 'id']
  );
}
