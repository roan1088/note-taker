// Importing the data from db.json
var db = require("../db/db.json");

// Exporting a function that creates api routes
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
      });    
};