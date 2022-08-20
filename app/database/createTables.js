export async function createTables(db) {
  console.log('Checking database tables...');

  // Create tables if they don't exist
  await db.none(
    `CREATE TABLE IF NOT EXISTS $1:name (
      id SERIAL PRIMARY KEY,
      username VARCHAR(32) NOT NULL UNIQUE,
      password TEXT NOT NULL
    );`,
    ['users']
  );
}
