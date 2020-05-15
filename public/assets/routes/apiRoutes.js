var noteData = require("../../data/db");

module.exports = function (app) {
  app.get("/api/tables", function (req, res) {
    res.json(noteData);
  });
};
