const {CompConsole} = require('./compConsole')

class FactoryMethod{
 constructor(){
   new CompConsole().withFactory()
 }
}

const factoryMethod = new FactoryMethod()