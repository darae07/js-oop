import Settings from './settings'

class FirstPage {
  private settings: Settings = Settings.getSettings();

  public setAndPrintSettings(): void {
    this.settings.setDarkMode(true)
    this.settings.setFontSize(15)
    console.log(this.settings.getDarkMode() + ' ' + this.settings.getFontSize())
  }
}

export default FirstPage