const MaterialsDao = require('../dao/MaterialsDao');

module.exports = (app, db) => {
  let materialsDb = new MaterialsDao(db)

  app.get('/materials', async (req, res) => {
    try {
      const rows = await materialsDb.getAllMaterials();
      
      res.json({
        result: rows,
        count: rows.length
      })
    } catch (err) {
      res.json({err});
    }
  })

  app.get('/materials/:marca', (req, res) => {
    materialsDb.getMarcaMaterials(req.params.marca)
    .then(rows => {
      res.json({
        result: rows,
        count: rows.length
      })
    })
    .catch(err => {
      res.json({err})
    })
  })
}