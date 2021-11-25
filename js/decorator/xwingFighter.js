const { Fighter } = require("./fighter");

class XWingFighter extends Fighter {
  attack() {
    console.log("탄환 발사");
  }
}

exports.XWingFighter = XWingFighter;
