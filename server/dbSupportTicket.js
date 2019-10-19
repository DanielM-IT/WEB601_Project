// These are the equivalents of sql queries. They are using Knex as the query builder and select all or specific data, add data, update data, and delete data.
// THey use object destructuring which allows Knex to extract the information from the locals object.


// Add a support ticket to the DB
function postSupportTicket(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Takes the data from the body of the request and places it in a variable.
    const payload = req.body
    // Variable to store information on which values are mandatory when posting.
    const mandatoryColumns = ['firstName', 'lastName', 'email', 'message']
    // Parsing payload which is the parameters sent from the client as part of the POST request.
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if all mandatory columns are filled before posting. If they arent it will return an error.
    if (mandatoryColumnsExists) {
        // Payload is inserted then receives a response dependent on whether an error was caught or not.
        knex('support')
            .insert(payload)
            .then(response => {
                if (response) {
                    res.status(201).json('Support ticket submitted')
                }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}


// Exports the function as a module object.
module.exports = {
    postSupportTicket,
}






