import ViewFactory from "../../shared/base/view-factory.mjs";
import TableBrowserComponent from "./table.mjs";

export default class BrowserFactory extends ViewFactory {
  createTable() {
    return new TableBrowserComponent()
  }
}