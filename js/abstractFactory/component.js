class Component {
  constructor() {
    console.log(this.getCompName() + " 생성");
  }
  getCompName() {}
}

class LightButton extends Component {
  getCompName() {
    return "라이트 버튼";
  }
}

class DarkButton extends Component {
  getCompName() {
    return "다크 버튼";
  }
}

class LightSwitch extends Component {
  getCompName() {
    return "라이트 스위치";
  }
}

class DarkSwitch extends Component {
  getCompName() {
    return "다크 스위치";
  }
}

class LightDropdown extends Component {
  getCompName() {
    return "라이트 드랍다운";
  }
}

class DarkDropdown extends Component {
  getCompName() {
    return "다크 드랍다운";
  }
}


exports.LightButton = LightButton
exports.LightDropdown = LightDropdown
exports.LightSwitch = LightSwitch
exports.DarkButton = DarkButton
exports.DarkDropdown = DarkDropdown
exports.DarkSwitch = DarkSwitch