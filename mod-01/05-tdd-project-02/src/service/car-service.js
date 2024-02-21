const BaseRepository = require("../repository/base/base-repository");

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({file: cars})
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
}

module.exports = CarService