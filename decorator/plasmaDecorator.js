const { FighterDecorator } = require("./fighterDecorator");

class PlasmaDecorator extends FighterDecorator {
  constructor(decoratedFighter) {
    super(decoratedFighter);
  }

  attack() {
    super.attack();
    console.log("플라즈마 발사");
  }
}

exports.PlasmaDecorator = PlasmaDecorator;
