// Set a UUID for development purposes
const JWT_SECRET_KEY_DEV = '9519018a-0762-4612-955c-2ff61e288754';
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || JWT_SECRET_KEY_DEV;
