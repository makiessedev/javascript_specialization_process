import { describe, it } from 'mocha'
import { expect } from 'chai'
import Person from '../src/person.js'

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString('1 Bike,Carro 200000 2020-01-02 2021-02-02')
    const expected = {
      id: "1",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "200000",
      from: "2020-01-02",
      to: "2021-02-02"
    }
    expect(person).to.be.deep.equal(expected)
  })

  it('Should format values', () => {
    const person = new Person({
      id: "1",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "200000",
      from: "2020-01-02",
      to: "2021-02-02"
    })

    const result = person.formatted('pt')

    const expected = {
      id: 1,
      vehicles: "Bike e Carro",
      kmTraveled: "200.000 km",
      from: "02 de janeiro de 2020",
      to: "02 de fevereiro de 2021"
    }

    expect(result).to.be.deep.equal(expected)
  })
})

