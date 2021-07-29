const express = require('express');
const cors = require('cors');

const app = express()

const materialsRoute = require('./controllers/materials-controller')

const db = require('./infra/sqlite-db')

app.use(express.json())
app.use(cors())

materialsRoute(app, db)

module.exports = app