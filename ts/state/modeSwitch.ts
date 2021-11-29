import { ModeState, ModeStateDark, ModeStateLight } from "./modeState";

class ModeSwitch {
  private modeState: ModeState = new ModeStateLight();

  setState(modeState: ModeState) {
    this.modeState = modeState;
  }

  onSwitch(): void {
    this.modeState.toggle(this);
  }
}

export { ModeSwitch };
