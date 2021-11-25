const {FighterFactory} = require('./fighterFactory')

class FactoryDecorator{
  constructor(){
    this.factory = new FighterFactory();

    this.factory.getFighter(false, false, false).attack();
    this.factory.getFighter(true, false, true).attack();
    this.factory.getFighter(true, true, false).attack();
    this.factory.getFighter(true, true, true).attack();
  }
}

const factoryDecorator = new FactoryDecorator();