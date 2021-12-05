import Fighter from "./fighter";
import XWingFighter from "./xWingFighter";
import LaserDecorator from "./laserDecorator";
import MissileDecorator from "./missileDecorator";
import PlasmaDecorator from "./plasmaDecorator";

class FighterFactory {
  public getFighter(
    laser: boolean,
    missile: boolean,
    plasma: boolean,
  ): Fighter {
    let fighter = new XWingFighter();

    if (laser) fighter = new LaserDecorator(fighter);
    if (missile) fighter = new MissileDecorator(fighter);
    if (plasma) fighter = new PlasmaDecorator(fighter);

    return fighter;
  }
}

export default FighterFactory;
