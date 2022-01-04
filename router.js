import { signup, signin } from "./controllers/authentication.js";
import passport from "passport";
import "./services/passport.js";

const requierAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const router = (app) => {
  app.use(passport.initialize());
  app.get("/", requierAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, signin);
  app.post("/signup", signup);
};

export default router;
