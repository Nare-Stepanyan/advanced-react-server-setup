import passport from "passport";
import User from "./../models/user.js";
import config from "./../config.js";
import Strategy from "passport-jwt";
import { ExtractJwt } from "passport-jwt";

const JwtStrategy = Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) {
      done(null, user);
    } else done(null, false);
  });
});

passport.use(jwtLogin);
