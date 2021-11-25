class Component {
  constructor() {
    console.log(this.getComponentName() + "생성");
  }

  getComponentName() {}
}

class Button extends Component {
  getComponentName() {
    return "버튼";
  }
}

class Switch extends Component {
  getComponentName() {
    return "스위치";
  }
}

class Dropdown extends Component {
  getComponentName() {
    return "드랍다운";
  }
}

exports.Button = Button;
exports.Switch = Switch;
exports.Dropdown = Dropdown;