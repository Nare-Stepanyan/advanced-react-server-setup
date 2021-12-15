import User from "./../models/user.js";
import jwt from "jwt-simple";
import config from "../config";

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

const signup = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  User.findOne({ email }, (err, existingUser) => {
    if (!email || !password) {
      return res
        .status(422)
        .send({ error: "You must provide an email and password" });
    }
    if (err) return next(err);
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
    const user = new User({
      email: email,
      password: password,
    });
    user.save((err) => {
      if (err) return next(err);
      return res.json({ token: tokenForUser(user) });
    });
  });
};

export default signup;
