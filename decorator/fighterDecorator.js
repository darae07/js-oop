const { Fighter } = require("./fighter");

class FighterDecorator extends Fighter {
  constructor(decoratedFighter) {
    super();
    this.decoratedFighter = decoratedFighter;
  }

  attack() {
    this.decoratedFighter.attack();
  }
}

exports.FighterDecorator = FighterDecorator;
