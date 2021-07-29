const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./src/infra/database.db');

const MATERIALS_SCHEMA = ` 
CREATE TABLE IF NOT EXISTS "MATERIALS" ( 
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "NOME" varchar(50),  
    "MARCA" varchar(50),
    "PRECOENTRADA" varchar(10),
    "QUANTIDADE" varchar(100)
    );`; 

function insertMaterials() { 
  db.run(MATERIALS_SCHEMA, (err) => { 
  }) 
} 

  db.serialize( ()=>{ 
    insertMaterials(); 
	}); 
