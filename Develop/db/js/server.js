const express = require("express");
const path = require("path");
const fs = require("fs");

//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;
let data = JSON.parse(fs.readFileSync("./json/db.json", "utf8"));

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The routes that get the html
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all notes
app.get("/api/notes", function (req, res) {
  return res.json(notes);
});

// Create New notes - takes in JSON input
app.post("/api/notes", function (req, res) {
  const newNotes = req.body;

  data.push(newNotes);

});

app.delete("/api/notes/:id"), function (req, res) {
  let id = req.params.id;
  data = data.filter(function (note) {
    if (note.id === id) {
      return false;
    }
    return true;
  });

  fs.writeFile("./json/db.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("test");

  });

  return res.json(true);

  fs.writeFile("./json/db.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    res.end();
  });

  return res.json(data);

  // Starts the server to begin listening
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

};

