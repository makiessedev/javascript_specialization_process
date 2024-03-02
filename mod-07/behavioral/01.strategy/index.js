import ContextStrategy from "./src/base/context-strategy.js";
import MondoDBStrategy from "./src/strategies/mondo-db-strategy.js";
import PostegresStrategy from "./src/strategies/postgres-strategy.js";

const postgresConnectionString = 'postgres://makiessemorais:senha0001@localhost:5432/heroes'
const postgresContext = new ContextStrategy(new PostegresStrategy(postgresConnectionString))
await postgresContext.connect()

const mongoDBConnectionString = 'mongodb://makiessemorais:senha0002@localhost:27017/heroes'
const mongoDBContext = new ContextStrategy(new MondoDBStrategy(mongoDBConnectionString))
await mongoDBContext.connect()

const data = [
  {
    name: 'makiessemorais',
    type: 'transaction',
  },
  {
    name: 'ambrósiomorais',
    type: 'activityLog'
  }
]

const contextTypes = {
  transaction: postgresContext,
  activityLog: mongoDBContext
}

for(const {name, type} of data) {
  const context = contextTypes[type]
  await context.create({name: name + Date.now()})
  console.log(type, context.dbStrategy.constructor.name)
  console.log(await context.read())
}
