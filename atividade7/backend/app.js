var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var DisciplinaRoute = require('./routes/DisciplinaRoute')
require('./db/connection');

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

app.use('/disciplinas', DisciplinaRoute)

module.exports = app