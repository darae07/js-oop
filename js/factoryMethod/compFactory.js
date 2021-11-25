const { Button, Switch, Dropdown } = require("./component");

class CompFactory {
  getComp(type) {
    if (type === "press") {
      return new Button();
    }
    if (type === "toggle") {
      return new Switch();
    }
    if (type === "expand") {
      return new Dropdown();
    }
  }
}

exports.CompFactory = CompFactory;