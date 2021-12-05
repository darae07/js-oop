import {
  Component,
  LightButton,
  LightDropdown,
  LightSwitch,
  DarkButton,
  DarkDropdown,
  DarkSwitch,
} from "./component";
import { Usage } from "./controller";

interface CompFactory {
  getComp(usage: Usage): Component;
}

class LightCompFactory implements CompFactory {
  public getComp(usage: Usage): Component {
    if (usage === Usage.PRESS) return new LightButton();
    else if (usage === Usage.TOGGLE) return new LightSwitch();
    else return new LightDropdown();
  }
}

class DarkCompFactory implements CompFactory {
  public getComp(usage: Usage): Component {
    if (usage === Usage.PRESS) return new DarkButton();
    else if (usage === Usage.TOGGLE) return new DarkSwitch();
    else return new DarkDropdown();
  }
}

export { LightCompFactory, DarkCompFactory, CompFactory };
