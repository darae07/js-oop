const { FighterDecorator } = require("./fighterDecorator");

class MissileDecorator extends FighterDecorator {
  constructor(decoratedFighter) {
    super(decoratedFighter);
  }

  attack() {
    super.attack();
    console.log("미사일 발사");
  }
}

exports.MissileDecorator = MissileDecorator;
