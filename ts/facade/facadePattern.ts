import { MyLocFacade } from "./myLcoFacade";

class FacadePattern {
  constructor() {
    new MyLocFacade().printMyAddress();
  }
}

const facadePattern = new FacadePattern();
