import XWingFighter from "./xWingFighter";
import LaserDecorator from "./laserDecorator";
import MissileDecorator from "./missileDecorator";
import PlasmaDecorator from "./plasmaDecorator";

class DecoratorPattern {
  constructor() {
    new XWingFighter().attack();

    new LaserDecorator(new XWingFighter()).attack();

    new PlasmaDecorator(
      new MissileDecorator(new LaserDecorator(new XWingFighter())),
    ).attack();
  }
}

const myPatter = new DecoratorPattern();