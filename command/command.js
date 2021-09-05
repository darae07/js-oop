// command class
// 커맨드 객체는 수신자 객체를 가지고 있으며, 수신자의 메서드를 호출

class Command {
  robot;

  setRobot (_robot) {
    this.robot = _robot;
  };

  execute(){};
};


// concrete commands

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

class CommandOrderAdapter extends Command {
  constructor(_order){
    super();
    this.order = _order;
  };

  execute () {
    this.order.run(this.robot);
  }
}

exports.MoveForwardCommand = MoveForwardCommand;
exports.TurnCommand = TurnCommand;
exports.PickupCommand = PickupCommand;
exports.CommandOrderAdapter = CommandOrderAdapter;