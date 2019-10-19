// These are the equivalents of sql queries. They are using Knex as the query builder and select all or specific data, add data, update data, and delete data.
// They use object destructuring which allows Knex to extract the information from the locals object.

// Get an account by email
function listSingleAccount(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Variable that takes the value passed through the parameters which is then used to compare against the condition in the where clause.
    const { email } = req.params
    // DB Query that selects values based on a condition.
    knex
        .select('email','firstName', 'lastName', 'phone', 'password')
        .from('account')
        .where({
            email: `${email}`
        })
        
        // Response which is something known as promise based.
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Account with email ${email} does not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
}


// Add an account to the DB
function postAccount(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Takes the data from the body of the request and places it in a variable.
    const payload = req.body
    // Variable to store information on which values are mandatory when posting.
    const mandatoryColumns = ['email' , 'firstName', 'lastName', 'phone', 'password']
    // Parsing payload which is the parameters sent from the client as part of the POST request.
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if all mandatory columns are filled before posting. If they arent it will return an error.
    if (mandatoryColumnsExists) {
        // Payload is inserted then receives a response dependent on whether an error was caught or not.
        knex('account')
            .insert(payload)
            .then(response => {
                if (response) {
                    res.status(201).json('Account record created')
                }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// Updating an account by email
function updateAccount(req, res) {
    // Runs the query req through app.locals which in the restful.js accesses the database connection within the config.js.
    const { knex } = req.app.locals
    // Variable that takes the value passed through the parameters which is then used to compare against the condition in the where clause.
    const { email } = req.params
    // Takes the data from the body of the request and places it in a variable.
    const payload = req.body
    // Payload is updated then receives a response dependent on whether an error was caught or not.
    knex('account')
        .where('email', email)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(200).json(`Email with ${email} updated.`)
            } else {
                return res.status(404).json(`Email with ${email} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Exports all the functions as a module object.
module.exports = {
    listSingleAccount,
    postAccount,
    updateAccount    
}