const { expect } = require('chai')
const { it, describe } = require('mocha')

const { productValidator } = require('./../src/index.js')
const ProductObjectMother = require('./model/product-object-mother.js')

describe('Test Object Mother', () => {
  it('shouldn\'t return error with valid product', () => {
    const product = ProductObjectMother.valid()
    const result = productValidator(product)

    const expected = {
      result: true,
      errors: []
    }

    expect(result).to.be.deep.equal(expected)
  })
  describe('Product Validation Rules', () => {
    it('should return an object error when creating a Product with invaid id', () => {
      const product = ProductObjectMother.withInvalidId()

      const result = productValidator(product)
      const expected = {
        result: false,
        errors: ["id: invalid length, current [] expected to be between 2 and 20"]
      }

      expect(result).to.be.deep.equal(expected)
    })
    it('should return an object error when creating a Product with invaid name', () => {
      const product = ProductObjectMother.withInvalidName()
      const result = productValidator(product)
      const expected = {
        result: false,
        errors: ["Name: invalid value, current [makiesse123] expected to have only words"]
      }

      expect(result).to.be.deep.equal(expected)
    })
    it('should return an object error when creating a Product with invaid price', () => {
      const product = ProductObjectMother.withInvalidPrice()
      const result = productValidator(product)
      const expected = {
        result: false,
        errors: ["Price: invalid value, current [2000] expected to be between 1 and 1000"]
      }

      expect(result).to.be.deep.equal(expected)
    })
    it('should return an object error when creating a Product with invaid category', () => {
      const product = ProductObjectMother.withInvalidCategory()
      const result = productValidator(product)
      const expected = {
        result: false,
        errors: ["Category: invalid value, current [mecanic] expected to be either electronic or organic"]
      }

      expect(result).to.be.deep.equal(expected)
    })
  })
})