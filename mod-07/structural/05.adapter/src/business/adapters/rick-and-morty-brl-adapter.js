import RickAndMortyBRL from './../integrations/rick-and-morty-brl.js'

export default class RickAndMortyBRLAdapter {
  static async getCharacters() {
    return RickAndMortyBRL.getCharactersFromJson()
  }
}