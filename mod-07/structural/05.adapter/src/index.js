import RickAndMortyUSAAdapter from "./business/adapters/rick-and-morty-usa-adapter.js";
import RickAndMortyBRLAdapter from "./business/adapters/rick-and-morty-brl-adapter.js";

const data = [
  RickAndMortyUSAAdapter,
  RickAndMortyBRLAdapter
].map(integration => integration.getCharacters())

const all = await Promise.allSettled(data)

const successes = all
  .filter(({status}) => status === 'fulfilled')
  .map(({value}) => value)
  .reduce((prev, next) => prev.concat(next), [])
const errors = all.filter(({status}) => status === 'rejected')

console.table(successes)
console.table(errors)
