import { ModeSwitch } from "./modeSwitch";

class MyProgram {
  modeSwitch: ModeSwitch;

  constructor() {
    this.modeSwitch = new ModeSwitch();

    this.modeSwitch.onSwitch();
    this.modeSwitch.onSwitch();
    this.modeSwitch.onSwitch();
    this.modeSwitch.onSwitch();
  }
}

const myProgram = new MyProgram();
