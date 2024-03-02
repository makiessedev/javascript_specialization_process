import { database } from './../shared/data.mjs'

class Application {
  constructor(factory) {
    this.table = factory.createTable()
  }

  initialize() {
    this.table.render(database)
  }
}

;(async() => {
  const path = globalThis.window ? 'browser' : 'console'
  const { default: ViewFactory } = await import(`./../plataforms/${path}/index.mjs`)
  const application = new Application(new ViewFactory())
  application.initialize(database)
})()