import Fighter from "./fighter";
import FighterDecorator from "./fighterDecorator";

class MissileDecorator extends FighterDecorator {
  constructor(decoratedFighter: Fighter) {
    super(decoratedFighter);
  }

  public attack(): void {
    super.attack();
    console.log("미사일 발사");
  }
}

export default MissileDecorator;
