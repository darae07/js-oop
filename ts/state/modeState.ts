import { ModeSwitch } from "./modeSwitch";

interface ModeState {
  toggle(modeSwitch: ModeSwitch): void;
}

class ModeStateLight implements ModeState {
  toggle(modeSwitch: ModeSwitch): void {
    console.log("from light to dark");

    modeSwitch.setState(new ModeStateDark());
  }
}

class ModeStateDark implements ModeState {
  toggle(modeSwitch: ModeSwitch): void {
    console.log("from dark to light");

    modeSwitch.setState(new ModeStateLight());
  }
}

export { ModeState, ModeStateDark, ModeStateLight };
