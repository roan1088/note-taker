// Importing the data from db.json
var db = require("../db/db.json");

// Exporting a function that creates api routes
module.exports = function(app) {
    // GET request
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });
    // POST request
    app.post("/api/notes", function(req, res) {
        // Set id to 1 incase there is no notes in the db
        let id = 1;
        // If there are notes, get the id of the last note and add 1 to it
        if (db.length > 0) {
            const lastNoteId = db[db.length - 1].id;
            id = lastNoteId + 1;
        }
        // Get the note from request body
        const newNote = req.body;
        // Give it the new id
        newNote.id = id;
        // Push the new note to the db
        db.push(newNote);
        // Return the new note
        res.json(newNote);
    });
};