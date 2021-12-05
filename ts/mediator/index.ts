import { ListView, GalleryView, DataDownloader } from "./modeListener";
import { ModeMediator } from "./modeMediator";
import { ModeSwitch } from "./modeSwitch";

class MediatorPattern {
  modeSwitch: ModeSwitch;
  modeMediator: ModeMediator;
  constructor() {
    this.modeSwitch = new ModeSwitch();
    this.modeMediator = new ModeMediator();

    this.modeSwitch.setModeMediator(this.modeMediator);

    this.modeMediator.addListener(new ListView());
    this.modeMediator.addListener(new GalleryView());
    this.modeMediator.addListener(new DataDownloader());

    this.modeSwitch.toggleMode();
    this.modeSwitch.toggleMode();
  }
}

const mediatorPattern = new MediatorPattern()