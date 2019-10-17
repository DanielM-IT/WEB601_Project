// These are the equivalents of sql queries. They are using Knex as the query builder and select all or specific data, add data, update data, and delete data.
// THey use object destructuring which allows Knex to extract the information from the locals object.

// Add a song to the DB
function postAccount(req, res) {
    const { knex } = req.app.locals
    const payload = req.body
    // Parsing payload which is the parameters sent from the client as part of the POST request.
    const mandatoryColumns = ['email' , 'firstName', 'lastName', 'phone', 'password']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if all mandatory columns are filled before posting. If they arent it will return an error.
    if (mandatoryColumnsExists) {
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

// Exports all the functions as a module object.
module.exports = {
    postAccount,
}