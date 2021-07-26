const db = require('../infra/sqlite-db')
const MaterialsDao = require('../src/dao/MaterialsDao')
const Materials = require('../src/models/materials-models')

describe('Test', () =>{
    
    it('Inserindo materiais', async () => {
        const materialsBanco = new MaterialsDao(db);
        let response = await materialsBanco.insertMaterials(new Materials('Agulha', 'White Head Premium', 115))
        expect(response).toBeTruthy()
    })

    it('Obtendo materiais', async () => {
        const materialsBanco = new MaterialsDao(db);
        let response = await materialsBanco.getAllMaterials()
        expect(Array.isArray(response)).toBeTruthy()
    })
})