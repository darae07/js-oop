class Settings {
  private static settings: Settings = null;

  public static getSettings(): Settings {
    if (this.settings === null) {
      this.settings = new Settings();
    }
    return this.settings;
  }

  private darkMode: boolean = false
  private fontSize: number = 13

  public getDarkMode(): boolean { return this.darkMode }
  public getFontSize(): number { return this.fontSize }

  public setDarkMode(darkMode: boolean): void {
    this.darkMode = darkMode
  }
  public setFontSize(fontSize: number):void{
    this.fontSize = fontSize
  }
}

export default Settings