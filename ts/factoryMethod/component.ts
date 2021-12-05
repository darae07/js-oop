abstract class Component {
  protected abstract getCompName(): string;
  constructor() {
    console.log(this.getCompName() + " 생성");
  }
}

class Button extends Component {
  protected getCompName(): string {
    return "버튼";
  }
}

class Switch extends Component {
  protected getCompName(): string {
    return "스위치";
  }
}

class Dropdown extends Component {
  protected getCompName(): string {
    return "드랍다운";
  }
}

export { Button, Switch, Dropdown, Component };
