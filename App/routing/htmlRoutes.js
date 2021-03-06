// dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.get("/App/routing", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/App/routing", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});


// Listener

app.listen(PORT, function() {
  console.log("Listening on PORT" + PORT);
});