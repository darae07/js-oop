import Settings from './settings'

class SecondPage {
  private settings: Settings = Settings.getSettings();

  public printSettings(): void {
    console.log(this.settings.getDarkMode() + ' ' + this.settings.getFontSize())
  }
}

export default SecondPage