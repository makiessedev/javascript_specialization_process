const { deepStrictEqual } = require('assert')
const rewiremock = require('rewiremock/node')

const dbData = [{name: 'Morais'}, {name: 'Ambrósio'}] 
class MockDatabase {
  async connect() {return this}
  async find(query) {return dbData}
}

rewiremock(() => require('../src/util/database.js')).with(MockDatabase)

;(async() => {
  {
    const expected = [{name: 'MORAIS'}, {name: 'AMBRÓSIO'}]
    rewiremock.enable()
    const UserFactory = require('../src/factory/user-factory.js')

    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find({name: 'Morais'})
    
    deepStrictEqual(result, expected)

    rewiremock.disable()
  }
})()