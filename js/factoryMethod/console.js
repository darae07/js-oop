const { CompFactory } = require("./compFactory");
const { Button, Switch, Dropdown } = require("./component");

class Console {
  compFactory = new CompFactory();

  comp1 = null;
  comp2 = null;
  comp3 = null;

  withoutFactory() {
    this.comp1 = new Button();
    this.comp2 = new Switch();
    this.comp3 = new Dropdown();
  }

  withFactory() {
    this.comp1 = this.compFactory.getComp("press");
    this.comp2 = this.compFactory.getComp("toggle");
    this.comp3 = this.compFactory.getComp("expand");
  }
}

exports.Console = Console;