import mongoose from "mongoose";
import keys from "../config/keys.js";
import passportJWT from "passport-jwt";

const { JwtStrategy, ExtractJwt } = passportJWT;
const User = mongoose.model("user");

const passportConfig = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey,
  };
  const strategy = new JwtStrategy(options, async ({ id }, done) => {
    const user = await User.findById(id);
    return user ? done(null, user) : done(null, false);
  });

  return passport.use(strategy);
};

export default passportConfig;
