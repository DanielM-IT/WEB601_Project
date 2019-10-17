//Accessing the express and cors modules
const express = require('express');
const app = express()
let cors = require('cors')

// Accessing the router, config and midleware code.
const router = express.Router()
const config = require('./config')
const middleware = require('./middleware')


// Use body-parser to convert our posted data to .json format.
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json() 

// Uses Knex to connect to the MySQL database.
const knex = require('knex')({
    client: 'mysql',
    connection: config.database 
})

// Add the Knex DB connection to the app.locals object.
app.locals.knex = knex

// Using the route between the DB queries and the request. Puts it into a variable which points to the route.
const routes = require('./routes')

// Creates the route for each request type. Each one leads to one of the query functions. The patch, delete and second get all use 
// middleware as they need to know the data ID to retrieve the correct data.

//Route to get all songs.
router.get('/songs', routes.songList.listAllSongs);
//Route to get a single song based on the ID.
router.get('/songs/:SongId', middleware.checkID, routes.songList.listSingleSong);
//Route to POST a new song by creating a new record in the database.
router.post('/songs', jsonParser, routes.songList.postSong);
// Route to PATCH/update existing song in the daatabase.
router.patch('/songs/:SongId', jsonParser, middleware.checkID, routes.songList.updateSong)
// Route to DELETE a song from the database.
router.delete('/songs/:SongId', middleware.checkID, routes.songList.deleteSong)

// Route to POST a new support ticket.
router.post('/supportTicket', jsonParser, routes.supportTicket.postSupportTicket)


// Use express to route between the host and the route requested.
app.use('/api', cors(), router);



// Tells the server to start listening on the port specified in the config.js file.
app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});