import { RoboKit } from "./robotKit";
import { Direction } from "./robot";
import { MoveForwardCommand, TurnCommand, PickupCommand } from "./command";

class MyProgram {
  robotKit: RoboKit;
  constructor() {
    this.robotKit = new RoboKit();
    this.robotKit.addCommand(new MoveForwardCommand(2));
    this.robotKit.addCommand(new TurnCommand(Direction.LEFT));
    this.robotKit.addCommand(new MoveForwardCommand(1));
    this.robotKit.addCommand(new TurnCommand(Direction.RIGHT));
    this.robotKit.addCommand(new PickupCommand());

    this.robotKit.start();
  }
}

const myProgram = new MyProgram();
