class MaterialsDao {
  constructor (db) {
    this.db = db;
  }
  getAllClients() {
    return new Promise ((resolve, reject) => {
      this.db.all('select * from clientes', (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}

