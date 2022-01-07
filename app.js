const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//GET Request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
//POST Request
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h1>Area of Circle is:${area}</h1>`);
});
app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5 * base * height;
  res.send(`<h1>Area of Triangle is:${area}</h1>`);
});

module.exports = app;
