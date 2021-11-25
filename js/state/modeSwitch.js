const { ModeStateLight, ModeStateDark} = require('./modeState');

class ModeSwitch {
  // 상태에 모드를 지정하고
  #modeState = new ModeStateLight();

  // 상태 변경시 모드도 변경됨.
  setState (_modeState) {
    this.#modeState = _modeState;
  };

  onSwitch () {
    this.#modeState.toggle(this);
  };
};

module.exports = ModeSwitch;