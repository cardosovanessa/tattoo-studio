const express = require('express');
const cors = require('cors');

const materialsRoute = require('./controllers/materials-controller')
const db = require('./infra/sqlite-db')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

materialsRoute(app, db)

app.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
});
