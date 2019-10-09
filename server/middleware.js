// This is the middleware, the code that bridges between the front and back end when a specific set of data is needing to be retrieved or manipulated. 
// In this case it uses the ID to do this.

function checkID(req, res, next) {

    const id = +req.params.id

    if (Number.isInteger(id)) {
        next() 
    } else {
        return res.status(400).json('ID must be an integer'); 
    }
}

module.exports = {
    checkID
}