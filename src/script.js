const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000

const materialsRoute = require('./controllers/materials-controller')

//const Materials = require('./models/materials-models')

const db = require('./infra/sqlite-db')

app.use(express.json())
app.use(cors())

materialsRoute(app, db)

app.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
})