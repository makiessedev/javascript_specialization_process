import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import Order from '../src/entities/order.js'
import OrderBusiness from '../src/business/order-business.js'

describe('Test suit for Template Method design pattern', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  describe("#OrderBusiness", () => {
    test('Execution Order Business withoud Template Method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.000,
        products: [{description: 'Ferrari'}]
      })

      const orderBusiness = new OrderBusiness()
      const isValid = orderBusiness._validateRequiredFields(order)
      expect(isValid).toBeTruthy()

      const result = orderBusiness._create(order)
      expect(result).toBeTruthy()
    })

    test('Execution Order Business with Template Method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.000,
        products: [{description: 'Ferrari'}]
      })

      const orderBusiness = new OrderBusiness()
      const calledValidationFn = jest.spyOn(
        orderBusiness,
        orderBusiness._validateRequiredFields.name
      )
      const calledCreateFn = jest.spyOn(
        orderBusiness,
        orderBusiness._create.name
      )

      const result = orderBusiness.create(order)
      expect(result).toBeTruthy()

      expect(calledValidationFn).toHaveBeenCalled()
      expect(calledCreateFn).toHaveBeenCalled()
    })
  })
})