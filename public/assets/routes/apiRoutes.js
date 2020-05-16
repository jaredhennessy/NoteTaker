//jshint esversion:6
const fs = require("fs");

let noteData = require("../../../db/db.json");
let noteArray;

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
    noteArray = noteData;
  });

  app.post("/api/notes", function (req, res) {
    noteArray.push(req.body);
    for (let note in noteArray) {
      noteArray[note].id = note;
    }
    fs.writeFile("./db/db.json", JSON.stringify(noteArray), function (err) {
      if (err) {
        return console.log(err);
      }
      res.json(noteArray);
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    const x = req.params.id;

    noteArray = noteArray.filter(function (value, index, arr) {
      return value.id !== x;
    });

    for (let note in noteArray) {
      noteArray[note].id = note;
    }

    console.log(noteArray);

    fs.writeFile("./db/db.json", JSON.stringify(noteArray), function (err) {
      if (err) {
        return console.log(err);
      }
      res.json(noteArray);
    });
  });
};
