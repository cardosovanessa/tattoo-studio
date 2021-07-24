const Materials = require('../models/materials-models');
const MaterialsDao = require('../dao/MaterialsDao.');

module.exports = (app, db) => {
let materialsDb = new MaterialsDao(db)

  app.get('/materials', (req, res) => {
    materialsDb.getAllClients()
    .then((rows) =>{
      response.json({
        result:rows,
        count:rows.length
      })
    })
    .catch((err)=>{
      response.json({err})
    })
  })
}