import Fighter from "./fighter";
import FighterDecorator from "./fighterDecorator";

class PlasmaDecorator extends FighterDecorator {
  constructor(decoratedFighter: Fighter) {
    super(decoratedFighter);
  }

  public attack(): void {
    super.attack();
    console.log("플라즈마 발사");
  }
}

export default PlasmaDecorator;
