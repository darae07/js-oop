import { Component, Button, Switch, Dropdown } from "./component";
import CompFactory from "./compFactory";

class FactoryConsole {
  private compFacory: CompFactory = new CompFactory();

  comp1: Component = this.compFacory.getComp(Usage.PRESS);
  comp2: Component = this.compFacory.getComp(Usage.TOGGLE);
  comp3: Component = this.compFacory.getComp(Usage.EXPAND);
}

enum Usage {
  PRESS,
  TOGGLE,
  EXPAND,
}

export { Usage, FactoryConsole };
