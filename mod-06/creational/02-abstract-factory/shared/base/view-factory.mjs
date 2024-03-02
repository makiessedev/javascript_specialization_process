import NotImplementedException from "../not-implemented-exception.mjs";

export default class ViewFactory {
  createTable() {
    return new NotImplementedException(this.createTable.name)
  }
}