import bcrypt from 'bcrypt';

const SALT_ROUNDS = process.env.SALT_ROUNDS || 13.37;
export async function createPasswordHash(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}
