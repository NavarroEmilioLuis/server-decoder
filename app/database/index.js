import pgPromise from 'pg-promise';

const pgp = pgPromise({});

console.log('Initializing database connection...');
export const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'decoder',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export function closeConnection() {
  console.log('Closing database connection...');
  pgp.end();
}
