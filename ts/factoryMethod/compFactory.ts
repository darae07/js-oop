import { Component, Button, Switch, Dropdown } from "./component";
import { Usage } from "./factoryConsole";

class CompFactory {
  public getComp(usage: Usage): Component {
    if (usage === Usage.PRESS) return new Button();
    else if (usage === Usage.TOGGLE) return new Switch();
    else return new Dropdown();
  }
}

export default CompFactory;
