// Route to connect between the database Knex queries controllers and the request type.
const songList = require('./dbSong.js')
const supportTicket = require('./dbSupportTicket')

// Exports the route variables as a module object.
module.exports = {
    songList,
    supportTicket
}