//jshint esversion:6
fs = require("fs");

let noteData = require("../../../db/db.json");
let noteArray;

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
    noteArray = noteData;
  });

  app.post("/api/notes", function (req, res) {
    noteArray.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(noteArray), function (err) {
      if (err) {
        return console.log(err);
      }
      res.json(noteData);
      //   console.log(noteArray);
    });
  });
};
