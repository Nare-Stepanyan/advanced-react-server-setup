const router = (app) => {
  app.get("/", function (req, res, next) {
    res.send("Hi there");
  });
};

export default router;
