class ModeMediator {
  listeners = [];

  addListener(listener) {
    this.listeners.push(listener);
  }

  onModeChange(mode) {
    this.listeners.forEach((listener) => listener.onModeChange(mode));
  }
}
exports.ModeMediator = ModeMediator;
