import dotenv from "dotenv";

dotenv.config();

const keys = {
  mongoURI: process.env.DB_CONNECTION,
  secretOrKey: process.env.DB_SECRET,
  httpPort: parseInt(process.env.HTTP_PORT),
  saltRounds: parseInt(process.env.HASH_SALT_ROUNDS),
  loggerMode: process.env.LOGGER_MODE,
  tokenExpireTime: parseInt(process.env.TOKEN_EXPIRE_TIME),
  tokenSecret: process.env.TOKEN_SECRET,
};

export default keys;
