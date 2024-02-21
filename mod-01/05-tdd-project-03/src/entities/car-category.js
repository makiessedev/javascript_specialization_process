const Base = require("./base/base");

class CarCategory extends Base{
  constructor({id, name, carIds, price}) {
    super({name, id})
    this.carIds = carIds
    this.price = price
  }
}

module.exports = CarCategory