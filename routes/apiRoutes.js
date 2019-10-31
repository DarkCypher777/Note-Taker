// LOAD DATA
var app = require("express").Router();
var connection = require("../db/connection");

// ROUTING
app.get("/api/newNote", function (req, res) {
  connection.query("SELECT * FROM notes", function (err, dbnewNote) {
    if (err) throw err;

    res.json(dbnewNote);
  });
});

app.post("/api/newNote", function (req, res) {
  connection.query("INSERT INTO notes SET ?", [req.body], function (err, result) {
    if (err) throw err;

    res.json(result);
  });
});

app.put("/api/newNote/:id", function (req, res) {
  connection.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id], function (err, result) {
    if (err) throw err;

    res.json(result);
  });
});

app.delete("/api/newNote/:id", function (req, res) {
  connection.query("DELETE notes SET ? WHERE id = ?", [req.body, req.params.id], function (err, result) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = app;