"use strict";var describe,it;module.link('mocha',{describe(v){describe=v},it(v){it=v}},0);var expect;module.link('chai',{expect(v){expect=v}},1);var Person;module.link('../src/person.js',{default(v){Person=v}},2);



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

