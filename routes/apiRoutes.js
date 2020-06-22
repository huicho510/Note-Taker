let database = require("../db/db.json");
const app = require("express").Router();
const connection = require("../db/connection");

app.get("/api/notes", (req, res) => {
  connection.query("SELECT * FROM notes", (err, response) => {
    return res.json(response);
  });
});

app.post("/api/notes", (req, res) => {
  connection.query(
    "INSERT INTO notes SET ?",
    {
      title: req.body.title,
      text: req.body.text,
    },
    (err, response) => {
      return res.json(response);
    }
  );
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM notes WHERE ?",{ id }, (err, response) => {
    return res.json(response);
  });
});

module.exports = app;
