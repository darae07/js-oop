import Fighter from "./fighter";
import FighterDecorator from "./fighterDecorator";

class LaserDecorator extends FighterDecorator {
  constructor(decoratedFighter: Fighter) {
    super(decoratedFighter);
  }

  public attack(): void {
    super.attack();
    console.log("레이저 발사");
  }
}

export default LaserDecorator;
