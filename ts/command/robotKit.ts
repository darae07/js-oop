import { Command } from "./command";
import { Robot } from "./robot";

class RoboKit {
  private robot: Robot = new Robot();
  private commands: Array<Command> = [];

  public addCommand(command: Command) {
    this.commands.push(command);
  }

  public start(): void {
    this.commands.forEach((command) => {
      command.setRobot(this.robot);
      command.execute();
    });
  }
}

export { RoboKit };
