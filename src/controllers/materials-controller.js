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
  });

  app.post('/materials', async (req, res) => {
   
      const {nome, marca, precoEntrada, quantidade} = req.body;
      let newMaterial = new Materials(nome, marca, precoEntrada, quantidade)
      try { 
        await materialsDb.postMaterials(newMaterial)
        res.status(201).json({
          message: "Materials successfully inserted.",
      })
  }
  catch{
      res.status(500).json({
          message: "Error inserting materials.",
          serverLog: err.message,
          error: true
      })
  }
})

  // app.delete('/materials/delete/:id', async(req, res) => { 
  //   const id = req.params.id 
  //   materialsDb.deleteMaterials(id) 
  //   .then(() => { 
  //     res.json({ 
  //       message: "successfully deleted materials"}) 
  //   }) 
  //     .catch((err) => { 
  //       res.json({ 
  //       message: "Error deleting materials", 
  //       error:err 
  //     }) 
  //   }) 
  // }) 

  app.delete('/materials/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await materialsDb.deleteMaterials(id);
      res.status(200).json({
        message: "Successfully deleted materials",
      });
    } catch (err) {
      res.status(500).json({
        message: "Error deleting materials",
        serverLog: err.message,
        error: true,
      });
    }
  });

//   app.put('/materials/update/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const materials = [body.nome, body.marca, body.precoEntrada, body.quantidade]
//     materialsDb.updateMaterials(materials, id)
//     .then(() => { 
//       res.json({ 
//         message: "Materials successfully update"}) 
//     }) 
//     .catch((err) => { 
//       res.json({ 
//         message: "Error deleting materials", 
//         error:err }) 
//     }) 
//   })
// }

  app.put('/materials/update/:id', async (req, res) => {
    const {nome, marca, precoEntrada, quantidade} = req.body;
    const { id } = req.params;
    try {
      await materialsDb.putMaterials(id, nome, marca, precoEntrada, quantidade);
      res.status(200).json({
        message: "Materials successfully update.",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error updating materials",
        serverLog: err.message,
        error: true,
      });
    }
  });
};