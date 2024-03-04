import axios from 'axios'
import fs from 'fs/promises'
import { describe, test, jest, beforeEach, expect } from '@jest/globals'
import RickAndMortyUSA from '../../src/business/integrations/rick-and-morty-usa.js'

describe('#RickAndMortyUSA', () => {
  beforeEach(() => { jest.clearAllMocks() })
  test('#getCharactersFromXML should return a list of Character Entity', async () => {
    const response = await fs.readFile('./test/mocks/characters.xml')
    const expected = [{ 
      "gender": "Male",
      "id": 10,
      "location": "Worldender's lair",
      "name": "Alan Rails",
      "origin": "unknown",
      "species": "Human",
      "status": "Dead",
      "type": "Superhuman (Ghost trains summoner)" 
    }]

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyUSA.getCharactersFromXML()

    expect(result).toMatchObject(expected)
  })
  test('#getCharactersFromXML should return an empty list if the API returns nothing', async () => {
    const response = await fs.readFile('./test/mocks/characters-empty.xml')
    const expected = []

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyUSA.getCharactersFromXML()

    expect(result).toStrictEqual(expected)
  })
})