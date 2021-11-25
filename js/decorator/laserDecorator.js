const { FighterDecorator } = require("./fighterDecorator");

class LaserDecorator extends FighterDecorator {
  constructor(decotatedFighter) {
    super(decotatedFighter);
  }

  attack() {
    super.attack();
    console.log("레이저 발사");
  }
}

exports.LaserDecorator = LaserDecorator;
