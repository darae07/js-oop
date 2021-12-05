import { LightCompFactory, DarkCompFactory, CompFactory } from "./compFactory";
import { Component } from "./component";

class Controller {
  private lightCompFactory: CompFactory = new LightCompFactory();
  private darkCompFactory: CompFactory = new DarkCompFactory();

  comp1: Component;
  comp2: Component;
  comp3: Component;

  withFactory(): void {
    this.comp1 = this.lightCompFactory.getComp(Usage.PRESS);
    this.comp2 = this.lightCompFactory.getComp(Usage.TOGGLE);
    this.comp3 = this.lightCompFactory.getComp(Usage.EXPAND);

    this.comp1 = this.darkCompFactory.getComp(Usage.PRESS);
    this.comp2 = this.darkCompFactory.getComp(Usage.TOGGLE);
    this.comp3 = this.darkCompFactory.getComp(Usage.EXPAND);
  }
}

enum Usage {
  PRESS,
  TOGGLE,
  EXPAND,
}

export { Usage, Controller };
