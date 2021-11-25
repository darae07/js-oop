const { LightButton } = require("./component");
const { DarkButton } = require("./component");
const { LightSwitch } = require("./component");
const { DarkSwitch } = require("./component");
const { LightDropdown } = require("./component");
const { DarkDropdown } = require("./component");

class CompFactory {
  getComp(usage) {}
}

class LightCompFactory extends CompFactory {
  getComp(usage) {
    if (usage === "PRESS") {
      return new LightButton();
    } else if (usage === "TOGGLE") {
      return new LightSwitch();
    } else {
      return new LightDropdown();
    }
  }
}

class DarkCompFactory extends CompFactory {
  getComp(usage) {
    if (usage === "PRESS") {
      return new DarkButton();
    } else if (usage === "TOGGLE") {
      return new DarkSwitch();
    } else {
      return new DarkDropdown();
    }
  }
}

exports.LightCompFactory = LightCompFactory
exports.DarkCompFactory = DarkCompFactory