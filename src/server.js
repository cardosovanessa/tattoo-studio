const express = require('express');
const cors = require('cors');

// import router
const materialsRoute = require('./controllers/materials-controller')
const db = require('./infra/sqlite-db')

// configs
const app = express()
const port = 3171

// middlewares
app.use(express.json())
app.use(cors())

materialsRoute(app, db)

app.listen(process.env.PORT||3171, () => {
  console.log(`Servidor rodando na porta:' ${process.env.PORT||3171}`)
})