import RickAndMortyUSA from './../integrations/rick-and-morty-usa.js'

export default class RickAndMortyUSAAdapter {
  static async getCharacters() {
    return RickAndMortyUSA.getCharactersFromXML()
  }
}