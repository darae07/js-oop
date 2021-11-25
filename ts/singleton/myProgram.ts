import FirstPage from './firstPage'
import SecondPage from './secondPage'

class MyProgram {
  constructor(){
    new SecondPage().printSettings()
    new FirstPage().setAndPrintSettings();
  }
}

const myProgram = new MyProgram();