class MaterialsDao {
  constructor (db) {
    this.db = db;
  }

  getAllMaterials() {
    return new Promise((resolve, reject) => {
      this.db.all('select * from materials', (err, rows) =>{
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

  getMaterialsByName(agulha) {
    return new promise ((resolve, reject) => {
      this.db.all('select * from materials where agulha = (?)', agulha, (err, rows) => {
          if(err){
            reject(err)
          }else{
            resolve(rows)
          }
        })
      })
    }

  insertMaterials(agulha){
    return new Promise((resolve, reject) => {
      this.db.run(`insert into materials (nome, marca, precoEntrada, quantidade)
      values (?, ?, ?, ?)`,         
      Object.values(agulha),
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      }
    );
  });
}
}

module.exports = MaterialsDao