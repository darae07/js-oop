import MyProgram from './myProgram'

class Main {
  myProgram: MyProgram
  constructor() {
    this.myProgram = new MyProgram()
    this.myProgram.testProgram()
  }
}

const main = new Main()