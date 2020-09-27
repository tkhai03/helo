const express = require('express')
const massive = require('massive')
const authCtrl = require('./controller')
require('dotenv').config()

const app = express()

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {   //massive returns a promise
    app.set('db', dbInstance)
    console.log('DB connection has been made.')
    app.listen(SERVER_PORT, () => console.log(`Arriving on port ${SERVER_PORT}`))
})

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)