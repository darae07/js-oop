const RobotKit = require('./robotKit');
const {MoveForwardCommand, TurnCommand, PickupCommand} = require('./command');

// client class
// 클라이언트 객체는 발동자 객체와 하나 이상의 커맨드 객체를 보유한다. 
// 클라이언트 객체는 어느 시점에서 어떤 명령을 수행할지를 결정한다. 
// 명령을 수행하려면, 클라이언트 객체는 발동자 객체로 커맨드 객체를 전달한다.

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