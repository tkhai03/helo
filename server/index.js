
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controller')
require('dotenv').config()

const app = express()
app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {   //massive returns a promise
    app.set('db', dbInstance)
    console.log('DB connection has been made.')
    app.listen(SERVER_PORT, () => console.log(`Arriving on port ${SERVER_PORT}`))
})

app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.post('/api/auth/logout', authCtrl.logout)

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))