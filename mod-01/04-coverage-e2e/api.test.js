const { deepStrictEqual } = require('assert')
const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('./api')
const assert = require('assert')

describe('API suite test', () => {
  describe('/contact', () => {
    it('Should request the contact and return HTTP status 200', async () => {
      const response = await request(app).get('/contact').expect(200)
      deepStrictEqual(response.text, 'contact us page')
    })
  })
  describe('/hello', () => {
    it('Should request an inexistent route /hi and redirect to /hello', async () => {
      const response = await request(app).get('/hi').expect(200)
      deepStrictEqual(response.text, 'Hello World!')
    })
  })
  describe('/login', () => {
    it('Should login successfully on the login route and return HTTP Status 200', async () => {
      const response = await request(app)
        .post('/login')
        .send( {username: 'Makiesse', password: '123'})
        .expect(200)

      deepStrictEqual(response.text, 'Loggign has succeeded!')
    })
    it('Should unauthorize a request when requesting it using wrong credentials and return HTTP Status 401', async () => {
      const response = await request(app).post('/login').send({username: 'Makiejsse', password: '321'}).expect(401)

      assert.ok(response.unauthorized)
      deepStrictEqual(response.text, 'Login failed!')
    })
  })
})