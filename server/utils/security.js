import bcrypt from "bcrypt";
import keys from "../config/keys.js";
import JWT from "jsonwebtoken";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(keys.saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

export const comparePassword = async (password, hash) =>
  await bcrypt.compare(password, hash);

export const generateToken = (payload) =>
  JWT.sign(payload, keys.tokenSecret, { expiresIn: keys.tokenExpireTime });
