const Materials = require('../models/materials-models');
const MaterialsDao = require('../dao/MaterialsDao');

module.exports = (app, db) => {
  app.get('/materials', (req, res) => {
    res.json({
      result: db.materials,
      count: db.materials.length,
    })
  })
};