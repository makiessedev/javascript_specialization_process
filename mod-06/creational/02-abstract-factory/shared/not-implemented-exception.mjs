export default class NotImplementedException extends Error {
  constructor(msg) {
    super(`the "${msg}" function was not implemented`)
    this.name = 'NotImplementedException'
  }
}