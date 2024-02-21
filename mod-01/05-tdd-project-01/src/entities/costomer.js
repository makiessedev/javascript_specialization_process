const Base = require("./base/base");

class Costumer extends Base {
  constructor({id, name, age}) {
    super({name, id})
    
    this.age = age
  }
}

module.exports = Costumer