

//var express = require("express");
//var path = require("path");

// Sets up the Express App
// =============================================================
//var app = express();
//var PORT = 3000;

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// The routes that get the html
//app.get("/notes", function (req, res) {
//res.sendFile(path.join(__dirname, "notes.html"));
//});

//app.get("*", function (req, res) {
//res.sendFile(path.join(__dirname, "index.html"));
//});

// Displays all characters
//app.get("/api/notes", function (req, res) {
//return res.json(notes);
//});

// Create New notes - takes in JSON input
//app.post("/api/notes", function (req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
//var newNotes = req.body;

// Using a RegEx Pattern to remove spaces from newNotes
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//newNotes.routeName = newNotes.name.replace(/\s+/g, "").toLowerCase();

//console.log(newNotes);

//notes.push(newNotes);

//res.json(newNotes);
//});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
