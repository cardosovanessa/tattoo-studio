const MaterialsDao = require('../dao/MaterialsDao');
const Materials = require('../models/materials-models');

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

  app.post('/materials/insert', async (req, res) => {
    try { 
      const {nome, marca, precoEntrada, quantidade} = req.body;
      let newMaterial = new Materials(nome, marca, precoEntrada, quantidade)
      let rows = await materialsDb.insertMaterials(newMaterial)
       
      res.json({
        result: rows,
        count: rows.length
      })
    } catch (err) {
      res.json({err});
      }
  })

  app.delete('/materials/delete/:id', (req, res) => { 
    const id = req.params.id 
    materialsDb.deleteMaterials(id) 
    .then(() => { 
      res.json({ 
        message: "successfully deleted materials"}) 
    }) 
      .catch((err) => { 
        res.json({ 
        message: "Error deleting materials", 
        error:err 
      }) 
    }) 
  }) 

  app.put('/materials/update/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const materials = [body.nome, body.marca, body.precoEntrada, body.quantidade]
    materialsDb.updateMaterials(materials, id)
    .then(() => { 
      res.json({ 
        message: "Materials successfully update"}) 
    }) 
    .catch((err) => { 
      res.json({ 
        message: "Error deleting materials", 
        error:err }) 
    }) 
  })
}