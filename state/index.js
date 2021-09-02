const ModeSwitch = require('./modeSwitch');

class Program {
  static modeSwitch = new ModeSwitch();
  
  static testProgram(){
    this.modeSwitch.onSwitch();
    this.modeSwitch.onSwitch();
    this.modeSwitch.onSwitch();
    this.modeSwitch.onSwitch();
  };
};

// test program
Program.testProgram();