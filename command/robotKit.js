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