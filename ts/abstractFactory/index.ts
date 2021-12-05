import { Controller } from "./controller";

class FactoryMethod {
  constructor() {
    new Controller().withFactory();
  }
}

const myFactory = new FactoryMethod();
