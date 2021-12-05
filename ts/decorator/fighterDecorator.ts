import Fighter from "./fighter";

abstract class FighterDecorator implements Fighter {
  private decoratedFighter: Fighter;
  constructor(decoratedFighter: Fighter) {
    this.decoratedFighter = decoratedFighter;
  }

  public attack(): void {
    this.decoratedFighter.attack();
  }
}

export default FighterDecorator;
