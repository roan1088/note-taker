// Importing express server module
const express = require("express");
const path = require("path");

// Setting the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Setting the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// HTML Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});