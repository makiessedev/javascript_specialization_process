import { describe, test, jest, beforeEach, expect } from '@jest/globals'
import RickAndMortyBRL from '../../src/business/integrations/rick-and-morty-brl'
import RickAndMortyBRLAdapter from '../../src/business/adapters/rick-and-morty-brl-adapter'

describe('#RickAndMortyBRLAdapter', () => {
  beforeEach(() => { jest.clearAllMocks() })
  test('#getCharacters should be an adapter for RickAndMortyBRL.getCharacterFromJson', async () => {
    const brlIntegration = jest.spyOn(
      RickAndMortyBRL,
      RickAndMortyBRL.getCharactersFromJson.name
    ).mockResolvedValue([])
    const result = await RickAndMortyBRLAdapter.getCharacters()

    expect(result).toStrictEqual([])
    expect(brlIntegration).toHaveBeenCalled()
  })
})