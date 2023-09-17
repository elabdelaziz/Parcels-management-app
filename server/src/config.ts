import dotenv from "dotenv";
// import { Pool } from 'pg'

dotenv.config();

const { PORT, BCRYPT_PASSWORD, SALT_ROUNDS, JWT_SECRET, PASSWORD } =
  process.env;

export default {
  port: PORT,
  salt: SALT_ROUNDS,
  pepper: BCRYPT_PASSWORD,
  jwToken: JWT_SECRET,
  generalPassword: PASSWORD,
};
