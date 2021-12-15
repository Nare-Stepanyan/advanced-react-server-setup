import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcryptjs";

const User = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

User.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

export default mongoose.model("user", User);
