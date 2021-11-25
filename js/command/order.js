class Order {
  run (robot){
    this.robot = robot;
  };
};

class MoveBackOrder extends Order {
  constructor(_block) {
    super();
    this.block = _block;
  };

  run (robot) {
    robot.turn('l');
    robot.turn('l');
    robot.moveForward(this.block);
  };
};

exports.MoveBackOrder = MoveBackOrder;