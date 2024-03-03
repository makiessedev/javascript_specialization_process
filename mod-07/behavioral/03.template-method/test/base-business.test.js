import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import BaseBusiness from '../src/business/base/base-business.js'
import { NotImplementedException } from '../src/util/exceptions.js'

describe('#BaseBusiness', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  test('should throw an error when child class doesnt implements _validateRequiredFields function', () => {
    class ConcreteClass extends BaseBusiness {}
    const concreteClass = new ConcreteClass()
    const validationError = new NotImplementedException(concreteClass._validateRequiredFields.name)

    expect(() => concreteClass.create({})).toThrow(validationError)
  })
  test('should throw an error when _validateRequiredFields function return false', () => {
    const VALIDATION_DOESNT_SUCCEDED = false

    class ConcretClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEDED)
    }

    const concretClass = new ConcretClass()
    const validationError = new Error('invalid data!')
    expect(() => concretClass.create({})).toThrow(validationError)

  })
  test('should throw an error when child class doesnt implements _create function', () => {
    const VALIDATION_SUCCEDED = true
    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEDED)
    }

    const concreteClass = new ConcreteClass()
    const validationError = new NotImplementedException(concreteClass._create.name)

    expect(() => concreteClass.create({})).toThrow(validationError)
  })
  test('should call _create and _validateRequiredFields on create', () => {
    const VALIDATION_SUCCEDED = true
    const CREATE_SUCCEDED = true

    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEDED)
      _create = jest.fn().mockReturnValue(CREATE_SUCCEDED)
    }
    const concreteClass = new ConcreteClass()
    const createFromBaseClass = jest.spyOn(
      BaseBusiness.prototype,
      BaseBusiness.prototype.create.name
    )

    const result = concreteClass.create({})

    expect(result).toBeTruthy()
    expect(createFromBaseClass).toHaveBeenCalled()
    expect(concreteClass._create).toHaveBeenCalled()
    expect(concreteClass._validateRequiredFields).toHaveBeenCalled()
  })
})