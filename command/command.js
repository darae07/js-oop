class Command {
  robot;

  setRobot (_robot) {
    this.robot = _robot;
  };

  execute(){};
};

class MoveForwardCommand extends Command {
  constructor (_space) {
    super();
    this.space = _space;
  };
  space;
  moveForwardCommand (_space) {
    this.space = _space;
  };

  execute () {
    this.robot.moveForward(this.space);
  };
};

class TurnCommand extends Command {
  constructor (_direction) {
    super();
    this.direction = _direction;
  };
  direction;
  TurnCommand (_direction) {
    this.direction = _direction;
  };

  execute () {
    this.robot.turn(this.direction);
  };
};

class PickupCommand extends Command {
  constructor () {
    super();
  };
  execute () {
    this.robot.pickup();
  };
};

exports.MoveForwardCommand = MoveForwardCommand;
exports.TurnCommand = TurnCommand;
exports.PickupCommand = PickupCommand;