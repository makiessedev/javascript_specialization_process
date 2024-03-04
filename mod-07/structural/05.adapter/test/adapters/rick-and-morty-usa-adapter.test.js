import { describe, test, jest, beforeEach, expect } from '@jest/globals'
import RickAndMortyUSA from '../../src/business/integrations/rick-and-morty-usa.js'
import RickAndMortyUSAAdapter from '../../src/business/adapters/rick-and-morty-usa-adapter.js'

describe('#RickAndMortyUSAAdapter', () => {
  beforeEach(() => { jest.clearAllMocks() })
  test('#getCharacters should be an adapter for RickAndMortyUSA.getCharacterFromXML', async () => {
    const usaIntegration = jest.spyOn(
      RickAndMortyUSA,
      RickAndMortyUSA.getCharactersFromXML.name
    ).mockResolvedValue([])
    const result = await RickAndMortyUSAAdapter.getCharacters()

    expect(result).toStrictEqual([])
    expect(usaIntegration).toHaveBeenCalled()
  })
})