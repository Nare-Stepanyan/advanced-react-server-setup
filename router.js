import signup from "./controllers/authentication.js";
import servicePassport from "./services/passport.js";
import passport from "passport";

const requierAuth = passport.authenticate("jwt", { session: false });
const router = (app) => {
  app.post("/signup", signup);
};

export default router;
