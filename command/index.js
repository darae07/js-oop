const RobotKit = require('./robotKit');
const {MoveForwardCommand, TurnCommand, PickupCommand} = require('./command');

class Program {
  robotkit = new RobotKit();

  main() {
    this.robotkit.addCommand(new MoveForwardCommand(2));
    this.robotkit.addCommand(new TurnCommand('l'));
    this.robotkit.addCommand(new MoveForwardCommand(1));
    this.robotkit.addCommand(new TurnCommand('r'));
    this.robotkit.addCommand(new PickupCommand());

    this.robotkit.start();
  };
}

const program = new Program();
program.main();