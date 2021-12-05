import { FactoryConsole } from "./factoryConsole";

class MyProgram {
  constructor() {
    new FactoryConsole();
  }
}

const myFactory = new MyProgram();
