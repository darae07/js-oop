const { ModeSwitch } = require("./modeSwitch");
const { ListView, GalleryView, DataDownloader } = require("./modeListener");
const { ModeMediator } = require("./modeMediator");

class MediatorPattern {
  modeSwitch = new ModeSwitch();
  modeMediator = new ModeMediator();

  constructor() {
    this.modeSwitch.setModeMediator(this.modeMediator);

    this.modeMediator.addListener(new ListView());
    this.modeMediator.addListener(new GalleryView());
    this.modeMediator.addListener(new DataDownloader());

    this.modeSwitch.toggleMode();
    this.modeSwitch.toggleMode();
  }
}

const mediatorPattern = new MediatorPattern();