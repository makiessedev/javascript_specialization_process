import { describe, test, jest, beforeEach, expect } from '@jest/globals'
import fs from 'fs/promises'
import Character from '../../src/entities/character'
import RickAndMortyBRL from '../../src/business/integrations/rick-and-morty-brl'
import axios from 'axios'

describe('#RickAndMortyBRL', () => {
  beforeEach(() => { jest.clearAllMocks() })

  test('#getCharactersFromJson should return a list of Character Entity', async () => {
    const response = JSON.parse(await fs.readFile('./test/mocks/characters.json'))
    const expected = response.results.map(char => new Character(char))

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyBRL.getCharactersFromJson()

    expect(result).toStrictEqual(expected)
  })
  test('#getCharactersFromJson should return an empty list if the API returns nothing', async () => {
    const response = JSON.parse(await fs.readFile('./test/mocks/characters-empty.json'))
    const expected = response.results

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyBRL.getCharactersFromJson()

    expect(result).toStrictEqual(expected)
  })
})