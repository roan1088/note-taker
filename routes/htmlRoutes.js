// Importing the path midule
var path = require("path");

// Exporting a function that creates html routes
module.exports = function(app) {
    // Routing to notes page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // Default to index page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
