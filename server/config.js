// Stores the specified port number to be used in a variable.
const APIServerPort = 4200

// Stores the database details where data is being retrieved from and store them in a variable.
const database = {
    host: 'localhost',
    port: 3306,
    user: 'Daniel',
    password: '100%Mine',
    database: 'artofthetune',
    insecureAuth: true
}

// Then we place these variables into a module object and export them.
module.exports = {
    database,
    APIServerPort
}