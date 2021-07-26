const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./src/infra/database.db');

const MATERIALS_SCHEMA = ` 
CREATE TABLE IF NOT EXISTS "MATERIALS" ( 
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "NOME" varchar(64),  
    "MARCA" varchar(50),
    "PRECOENTRADA" varchar(10),
    "QUANTIDADE" varchar(50)
    );`; 

function inserirMateriais() { 
  db.run(MATERIALS_SCHEMA, (err) => { 
    if(err) 
  console.log("Error creating material table") 
  }) 
} 
  db.serialize( ()=>{ 
    inserirMateriais() 
	}) 
