import { Robot, Direction } from "./robot";

interface Order {
  run(robot: Robot): void;
}

class MoveBackOrder implements Order {
  private block: number;

  constructor(block: number) {
    this.block = block;
  }

  public run(robot: Robot): void {
    robot.turn(Direction.LEFT);
    robot.turn(Direction.LEFT);
    robot.moveForward(this.block);
  }
}

export { Order , MoveBackOrder};
