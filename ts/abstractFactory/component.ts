abstract class Component {
  protected abstract getCompName(): string;
  constructor() {
    console.log(this.getCompName() + "생성");
  }
}

class LightButton extends Component {
  protected getCompName(): string {
    return "라이트 버튼";
  }
}

class LightSwitch extends Component {
  protected getCompName(): string {
    return "라이트 스위치";
  }
}

class LightDropdown extends Component {
  protected getCompName(): string {
    return "라이트 드랍다운";
  }
}

class DarkButton extends Component {
  protected getCompName(): string {
    return "다크 버튼";
  }
}

class DarkSwitch extends Component {
  protected getCompName(): string {
    return "다크 스위치";
  }
}

class DarkDropdown extends Component {
  protected getCompName(): string {
    return "다크 드랍다운";
  }
}

export {
  LightButton,
  LightDropdown,
  LightSwitch,
  DarkButton,
  DarkDropdown,
  DarkSwitch,
  Component,
};
