import NotImplementedException from "../not-implemented-exception.mjs";

export default class TableComponent {
  render() {
    throw new NotImplementedException(this.render.name)
  }
}