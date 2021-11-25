const{LightCompFactory} = require('./compFactory')
const{DarkCompFactory} = require('./compFactory')

class CompConsole{
  #lightCompFactory = new LightCompFactory()
  #darkCompFactory = new DarkCompFactory()

  comp1 = null
  comp2 = null
  comp3 = null

  withFactory(){
    this.comp1 = this.#lightCompFactory.getComp('PRESS')
    this.comp2 = this.#lightCompFactory.getComp('TOGGLE')
    this.comp3 = this.#lightCompFactory.getComp('EXPAND')

    this.comp1 = this.#darkCompFactory.getComp('PRESS')
    this.comp2 = this.#darkCompFactory.getComp('TOGGLE')
    this.comp3 = this.#darkCompFactory.getComp('EXPAND')
  }
}

exports.CompConsole = CompConsole