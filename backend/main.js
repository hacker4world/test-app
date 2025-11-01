const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-data", function (req, res) {
  res.json({
    data: "this is your data",
  });
});

app.listen(4000, "0.0.0.0", () => console.log("server started"));
