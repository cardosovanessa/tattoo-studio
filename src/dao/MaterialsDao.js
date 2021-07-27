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

  /*
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
  */

  insertMaterials(materials){
    return new Promise((resolve, reject) => {
      this.db.run(`insert into materials (nome, marca, precoEntrada, quantidade)
      values (?, ?, ?, ?)`,         
        Object.values(materials),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve({message: 'objeto criado'});
          }
        }
      )
    })
  }

  deleteMaterials(id){
    return new Promise((resolve, reject) => {
      this.db.run(`delete from materials where id = ?`, id, err => {
        if(err) {
          reject(err);
        }
        else {
          resolve();
        }
      })
    })
  }

  updateMaterials(materials, id) {
    return new Promise ((resolve, reject) => {
      this.db.run(`update materials set nome=?, marca=?, precoEntrada=?, quantidade=? where id = (?)`, 
      [materials[0], materials[1], materials[2], materials[3], id], (err) => {
        if(err) {
          reject(err);
        }
        else {
          resolve();
        } 
      })
    })
  }
}

module.exports = MaterialsDao