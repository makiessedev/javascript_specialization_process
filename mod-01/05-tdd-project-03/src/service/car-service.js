const Transaction = require("../entities/transaction");
const BaseRepository = require("../repository/base/base-repository");
const Tax = require('./../entities/tax')

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({file: cars})
    this.taxesBasedOnAge = Tax.taxesBasedOnAge
    this.currencyFormat = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  getRandomPositionFromArray(list) {
    return Math.floor(Math.random() * list.length)
  }

  chooseRandomCar(carCategory) {
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds)
    const carId = carCategory.carIds[randomCarIndex]
    return carId
  }

  async getAvailableCar(carCategory) {
    const carId = this.chooseRandomCar(carCategory)
    const car = await this.carRepository.find(carId)

    return car
  }

  calculateFinalPrice(customer, carCategory, numberOfDays) {
    const { age } = customer
    const { price } = carCategory
    const { then: tax } = this.taxesBasedOnAge.find(tax => age >= tax.from && age <= tax.to)

    const finalPrice = (tax * price) * (numberOfDays)
    const formattedPrice = this.currencyFormat.format(finalPrice)

    return formattedPrice
  }

  async rent(customer, carCategory, numberOfDays) {
    const car = await this.getAvailableCar(carCategory)
    const price = this.calculateFinalPrice(customer, carCategory, numberOfDays)

    const today = new Date()
    today.setDate(today.getDate() + numberOfDays)

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    const dueDate = today.toLocaleDateString('pt', options)

    const transaction = new Transaction({
      amount: price, 
      car, 
      customer, 
      dueDate
    })

    return transaction
  }
}

module.exports = CarService