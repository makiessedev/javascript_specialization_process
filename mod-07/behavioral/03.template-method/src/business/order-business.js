import BaseBusiness from "./base/base-business.js";

export default class OrderBusiness extends BaseBusiness {
  #order = new Set()

  _validateRequiredFields(data) {
    return !!data.amount && !!data.products.length
  }
  _create(data) {
    this.#order.add(data)
    return true
  }
}