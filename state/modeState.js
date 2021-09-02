class ModeState {
  toggle (modeSwitch) {};
};

// 모드 - 상태와 묶어서 모드 갈아끼우는 메소드 제공
class ModeStateLight extends ModeState {
  toggle (modeSwitch) {
    super.toggle();
    console.log('FROM LIGHT TO DARK');
    // 각 상태별로 메소드 실행시 모드도 변경
    modeSwitch.setState(new ModeStateDark());
  };
};

class ModeStateDark extends ModeState {
  toggle (modeSwitch) {
    super.toggle();
    console.log('FROM DARK TO LIGHT');
    // 각 상태별로 메소드 실행시 모드도 변경
    modeSwitch.setState(new ModeStateLight());
  };
};

exports.ModeStateLight = ModeStateLight;
exports.ModeStateDark = ModeStateDark;