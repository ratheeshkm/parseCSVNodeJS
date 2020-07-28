const csv = require("csvtojson");
const csvFilePath = "./data/TestData8.csv";

const userRoutes = (app, fs) => {
  const dataPath = "./data/dummyData.json";

  app.get("/users", (req, res) => {
    /*
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
		});
		*/
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        res.send(jsonObj);
      });
  });
};

module.exports = userRoutes;
