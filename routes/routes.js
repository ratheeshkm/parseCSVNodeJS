const userRoutes = require("./users");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Welcome to the development server!");
  });

  userRoutes(app, fs);
};

module.exports = appRouter;
