// This is the middleware, the code that bridges between the front and back end when a specific set of data is needing to be retrieved or manipulated. 
// In this case it uses the ID to do this.

function checkID(req, res, next) {
    // Creates a variable to store the ID. Then checks if the id is an integer before it can be used. Following this is a next() 
    // which is a function allowing the middleware to execute.
    const SongId = +req.params.SongId

    if (Number.isInteger(SongId)) {
        next() 
    } else {
        return res.status(400).json('ID must be an integer'); 
    }
}

// Exporting the variable as a module object.
module.exports = {
    checkID
}