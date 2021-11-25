const { XWingFighter } = require("./xwingFighter");
const { LaserDecorator } = require("./laserDecorator");
const { MissileDecorator } = require("./missileDecorator");
const { PlasmaDecorator } = require("./plasmaDecorator");

class FighterFactory {
  getFighter(laser, missile, plasma) {
    let fighter = new XWingFighter();

    if (laser) fighter = new LaserDecorator(fighter);
    if (missile) fighter = new MissileDecorator(fighter);
    if (plasma) fighter = new PlasmaDecorator(fighter);

    return fighter;
  }
}

exports.FighterFactory = FighterFactory;
