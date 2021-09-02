class ModeState {
  toggle (modeSwitch) {};
};

class ModeStateLight extends ModeState {
  toggle (modeSwitch) {
    super.toggle();
    console.log('FROM LIGHT TO DARK');
    modeSwitch.setState(new ModeStateDark());
  };
};

class ModeStateDark extends ModeState {
  toggle (modeSwitch) {
    super.toggle();
    console.log('FROM DARK TO LIGHT');
    modeSwitch.setState(new ModeStateLight());
  };
};

exports.ModeStateLight = ModeStateLight;
exports.ModeStateDark = ModeStateDark;