const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/a", (req, res) => {
  res.send("Hello World!");
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Example app listening on port 3000');
  });
}

module.exports = app;
