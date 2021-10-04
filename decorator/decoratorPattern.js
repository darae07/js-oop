const { XWingFighter } = require("./xwingFighter");
const { LaserDecorator } = require("./laserDecorator");
const { MissileDecorator } = require("./missileDecorator");
const { PlasmaDecorator } = require("./plasmaDecorator");

class DecoratorPattern {
  constructor() {
    new XWingFighter().attack();

    new LaserDecorator(new XWingFighter()).attack;

    new PlasmaDecorator(
      new MissileDecorator(new LaserDecorator(new XWingFighter())),
    ).attack();
  }
}

const decoratorPattern = new DecoratorPattern();
