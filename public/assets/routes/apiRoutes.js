var noteData = require("../../data/db");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });
};
