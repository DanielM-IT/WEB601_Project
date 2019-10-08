const APIServerPort = 4200

const database = {
    host: 'localhost',
    port: 3306,
    user: 'Daniel',
    password: '100%Mine',
    database: 'artofthetune',
    insecureAuth: true
}

// Then we export it
module.exports = {
    database,
    APIServerPort
}