class MaterialsDao {
  constructor (db) {
    this.db = db;
  }

  getAllMaterials() {
    return new Promise((resolve, reject) => {
      this.db.all('select * from materials', (err, rows) => {
        err ? reject(err) : resolve(rows)
      })
  })
}

  /* getMaterialsName(nome) {
    return new promise ((resolve, reject) => {
      this.db.all('select * from materials where nome = (?)', nome, (err, rows) => {
        err ? reject(err) : resolve(rows)
        })
      })
    } */
  
  postMaterials(materials) {
    return new Promise((resolve, reject) => {
      this.db.run(`insert into materials (nome, marca, precoEntrada, quantidade)
      values (?, ?, ?, ?)`,         
        Object.values(materials),
        (err) => {
          err ? reject(err) : resolve()
        })
    })
}

  deleteMaterials(id){
    return new Promise((resolve, reject) => {
      this.db.run(`delete from materials where id = ?`, id, err => {
        err ? reject(err) : resolve()
      })
  })
}

 /* updateMaterials(materials, id) {
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
} */

  putMaterials(id, nome, marca, precoEntrada, quantidade) {
    if (nome || marca || precoEntrada || quantidade) {
      
      let virgula = false
      let newArray = []
      let sql = 'Update materials set'
      
      if(nome){
        sql = sql + ' nome = ?'
        virgula = true
        newArray.push(nome)
      }
      if(marca){
        if(virgula)
          sql = sql  +',marca = ?'
        else{
          sql = sql  +'marca = ?'
          virgula = true
        }
        newArray.push(marca)
      }
      if(precoEntrada){
        if(virgula)
          sql = sql  +',precoEntrada = ?'
        else{
          sql = sql  +'precoEntrada = ?'
          virgula = true
        }
        newArray.push(precoEntrada)
      }
      if(quantidade){
        if(virgula)
          sql = sql  +',quantidade = ?'
        else{
          sql = sql  +'quantidade = ?'
          virgula = true
        }
        newArray.push(quantidade)
      }
      sql = sql + 'where id = ?'
      newArray.push(id)
      return new Promise((resolve, reject) => {
        this.db.run(sql, newArray, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
    else
    throw new Error('No attributes (id, nome, marca, precoEntrada, quantidade) sent.')
  }
}

module.exports = MaterialsDao