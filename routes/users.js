const userRoutes = (app, fs) => {
  const dataPath = "./data/dummyData.json";
  app.get("/users", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;
