import { Robot, Direction } from "./robot";

abstract class Command {
  protected robot: Robot;

  public setRobot(robot: Robot): void {
    this.robot = robot;
  }

  public abstract execute(): void;
}

class MoveForwardCommand extends Command {
  space: Number;
  constructor(space: Number) {
    super();
    this.space = space;
  }

  public execute(): void {
    this.robot.moveForward(this.space);
  }
}

class TurnCommand extends Command {
  direction: Direction;
  constructor(direction: Direction) {
    super();
    this.direction = direction;
  }

  public execute(): void {
    this.robot.turn(this.direction);
  }
}

class PickupCommand extends Command {
  public execute(): void {
    this.robot.pickup();
  }
}

export { MoveForwardCommand, TurnCommand, PickupCommand, Command };
