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

  /*  const ADD_MATERIALS_DATA = `
    INSERT INTO MATERIALS (ID, NOME, MARCA, PRECOENTRADA, QUANTIDADE)
    VALUES 
        (1, 'Luvas descartáveis', 'Maxiblack', 'R$60,00' '20 UN'),
        (2, 'Máquina', 'Amazon Fox Pen Machine', 2.187,00 '1 UN'),
        (3, 'Cartucho', 'Aston', R$153,00 '10 UN'),
        (4, 'Agulhas', 'Phantom Hk', 'R$400,00', '200 UN' ),
        (5, 'Biqueira Descartável', 'ASTON', 'R$63,00', '20 UN')
    ` */

function insertMaterials() { 
  db.run(MATERIALS_SCHEMA, (err) => { 
    if(err) 
  console.log("Error creating material table") 
  }) 
} 

/*function populaTabelMaterials() {
  db.run(ADD_MATERIALS_DATA, (error)=> {
     if (error) console.log("Erro ao popular tabela de mateirais");
  });
}*/

  db.serialize( ()=>{ 
    insertMaterials(); 
	}); 
