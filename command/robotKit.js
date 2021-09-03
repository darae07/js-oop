// invoker class
// 발동자 객체는 필요에 따라 명령 발동에 대한 기록을 남길 수 있다. 
// 한 발동자 객체에 다수의 커맨드 객체가 전달될 수 있다.

const Robot = require('./robot');

class RobotKit {
  #robot = new Robot();
  commands = [];

  addCommand (command) {
    this.commands.push(command);
  };

  start () {
    for (const command of this.commands) {
      command.setRobot(this.#robot);
      command.execute();
    }
  };
};

module.exports = RobotKit;