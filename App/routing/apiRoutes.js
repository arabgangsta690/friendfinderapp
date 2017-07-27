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



app.post("/api/friends", function(req, res) {
  var matches = req.body;
  matches.routeName = matches.name.replace(/\s+/g, "").toLowerCase();

  console.log(matches);

  reservations.push(matches);

  res.json(matches);
});


// Listener

app.listen(PORT, function() {
  console.log("Listening on PORT" + PORT);
});