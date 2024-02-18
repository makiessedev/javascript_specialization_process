const { deepStrictEqual } = require('assert')
const sinon = require('sinon')
const Service = require('./service')
const BASE_URL_1 = 'https://swapi.dev/api/planets/1'
const BASE_URL_2 = 'https://swapi.dev/api/planets/2'
const mocks = {
  Alderaan: require('../mocks/Alderaan.json'),
  Tatooine: require('../mocks/Tatooine.json')
}
  ;
(async () => {
/*   {
    const service = new Service()
    const withoutStub = await service.makeRequest(BASE_URL_2)
    console.log(JSON.stringify(withoutStub))
  } */

  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)

  stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.Tatooine)

  stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.Alderaan)

  {
    const expect = {
      "name": "Tatooine",
      "surfaceWater": "1",
      appearedIn: 5
    }

    const result = await service.getPlanets(BASE_URL_1)
    deepStrictEqual(result, expect)
  }

  {
    const expect = {
      "name": "Alderaan",
      "surfaceWater": "40",
      appearedIn: 2
    }

    const result = await service.getPlanets(BASE_URL_2)
    deepStrictEqual(result, expect)
  }
})()