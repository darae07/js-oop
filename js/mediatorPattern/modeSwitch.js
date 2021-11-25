class ModeSwitch {
  mode = "LIST";

  modeMediator = null;

  setModeMediator(modeMediator) {
    this.modeMediator = modeMediator;
  }

  toggleMode() {
    this.mode = this.mode === "LIST" ? "GALLERY" : "LIST";

    if (this.modeMediator !== null) {
      this.modeMediator.onModeChange(this.mode);
    }
  }
}

exports.ModeSwitch = ModeSwitch;
