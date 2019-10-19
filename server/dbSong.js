// These are the equivalents of sql queries. They are using Knex as the query builder and select all or specific data, add data, update data, and delete data.
// They use object destructuring which allows Knex to extract the information from the locals object.

// Lists all the songs. Basically a select all function.
function listAllSongs(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // DB Query that selects all values from a table.
    knex
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('song')
       
        .then(data => res.status(200).json(data))
        // To catch any errors that might arise
        .catch(error => res.status(500).json(error))
}

function listPromotionalSongs(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // DB Query that selects values based on a condition.
    knex
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('song')
        .orderBy('SongId', 'desc')
        .limit(6)

        .then(data => res.status(200).json(data))
        // To catch any errors that might arise
        .catch(error => res.status(500).json(error))
}


// A function that specifies a condition to retrieve a single song using its ID.
function listSingleSong(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Variable that takes the value passed through the parameters which is then used to compare against the condition in the where clause.
    const { SongId } = req.params
    // DB Query that selects values based on a condition.
    knex
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('song')
        .where({
            SongId: `${SongId}`
        })
        
        // Response which is something known as promise based.
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Song with ID ${SongId} does not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Add a song to the DB
function postSong(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Takes the data from the body of the request and places it in a variable.
    const payload = req.body
    // Variable to store information on which values are mandatory when posting.
    const mandatoryColumns = ['Title' , 'Length', 'Author', 'Genre']
    // Parsing payload which is the parameters sent from the client as part of the POST request.
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if all mandatory columns are filled before posting. If they arent it will return an error.
    if (mandatoryColumnsExists) {
        // Payload is inserted then receives a response dependent on whether an error was caught or not.
        knex('song')
            .insert(payload)
            .then(response => {
                if (response) {
                    res.status(200).json('Song record created')
                }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// Updating a song by id
function updateSong(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Variable that takes the value passed through the parameters which is then used to compare against the condition in the where clause.
    const { SongId } = req.params
    // Takes the data from the body of the request and places it in a variable.
    const payload = req.body
    // Payload is updated then receives a response dependent on whether an error was caught or not.
    knex('song')
        .where('SongId', SongId)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(200).json(`Song with id ${SongId} updated.`)
            } else {
                return res.status(404).json(`Song with id ${SongId} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Deleting a song by id
function deleteSong(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Variable that takes the value passed through the parameters which is then used to compare against the condition in the where clause.
    const { SongId } = req.params
    // Deletes any records that match the condition in the where clause. If done primary key properly it should only be one record.
    knex('song')
        .where('SongId', SongId)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Song with id ${SongId} is deleted.`)
            } else {
                res.status(404).json(`Song with id ${SongId} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

// Exports all the functions as a module object.
module.exports = {
    listAllSongs,
    listPromotionalSongs,
    listSingleSong,
    postSong,
    updateSong,
    deleteSong
}






