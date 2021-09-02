const { ModeStateLight, ModeStateDark} = require('./modeState');

class ModeSwitch {
  #modeState = new ModeStateLight();

  setState (_modeState) {
    this.#modeState = _modeState;
  };

  onSwitch () {
    this.#modeState.toggle(this);
  };
};

module.exports = ModeSwitch;