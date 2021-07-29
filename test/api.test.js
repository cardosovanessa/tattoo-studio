const request = require('supertest')
const app = require('../src/app')

describe('Testing materials routes', () => {

  it('GET /materials ', async () =>{
    const response = await request(app)
		.get('/materials')
    expect(response.body).toHaveProperty('result')
  })

  it('POST /materials', async () => {
    const response = await request(app)
    .post('/materials')
    .send({
      nome:'',
      marca:'',
      precoEntrada: '',
      quantidade: ''
    })
    expect(response.body).toHaveProperty('message')
  })

  it('PUT: /materials/id', async () => {
    const response = await request(app)
		.put('/materials/5')
		.send({
      nome:'',
      marca:'',
      precoEntrada: '',
      quantidade: ''
    })
    expect(response.body).toHaveProperty('message')
  })

  it('DELETE /materials/id', async () =>{
    const response = await request(app)
    .delete('/materials/1')
    expect(response.body).toHaveProperty('message')
  })
})