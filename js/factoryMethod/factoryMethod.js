const {Console} = require('./console')

class FactoryMethod {
  constructor() {
    this.cons = new Console();
    this.cons.withoutFactory();
    this.cons.withFactory();
  }
}

const factoryMethod = new FactoryMethod();