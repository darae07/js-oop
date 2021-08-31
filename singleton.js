// # 1
// get instance를 활용한 접근
class Settings{
  constructor(){
    if(!Settings._instance){
      Settings._instance = this;
    }
    return Settings._instance
  }
  static getInstance(){
    return this._instance
  };

  #darkMode = false;
  #fontSize = 13;

  getDarkMode(){
    return this.#darkMode;
  };

  getFontSize(){
    return this.#fontSize;
  };

  setDarkMode(_darkMode){
    this.#darkMode = _darkMode;
  };

  setFontSize(_fontSize){
    this.#fontSize = _fontSize;
  }
};
// 최초 한번 인스턴스를 생성하고 나면
const settings1 = new Settings();

class FirstPage{
  // 항상 같은 인스턴스를 사용하게 된다.
  settings = Settings.getInstance();
  
  setAndPrintSettings(){
    this.settings.setDarkMode(true);
    this.settings.setFontSize(15);
    console.log(this.settings.getDarkMode(), this.settings.getFontSize());
  }
};

class SecondPage{
  // 항상 같은 인스턴스를 사용하게 된다.
  settings = Settings.getInstance();

  logSettings(){
    console.log(this.settings.getDarkMode(), this.settings.getFontSize());
  }
};

const firstPage = new FirstPage();
const secondPage = new SecondPage();

secondPage.logSettings();
firstPage.setAndPrintSettings();
secondPage.logSettings();


// # 2 
// 모듈 시스템을 이용한 보다 쉽고 확장성있는 방법.(모듈은 추후 다뤄보도록 한다.)
class Settings2{
  #darkMode = false;
  #fontSize = 13;

  getDarkMode(){
    return this.#darkMode;
  };

  getFontSize(){
    return this.#fontSize;
  };

  setDarkMode(_darkMode){
    this.#darkMode = _darkMode;
  };

  setFontSize(_fontSize){
    this.#fontSize = _fontSize;
  }
}
const settings2 = new Settings2();

// commonJS
module.exports = settings2;
// ES6
// export default settings2

class TestPage{
  settings = settings2;

  logSettings(){
    console.log(this.settings.getDarkMode(), this.settings.getFontSize());
  }

  setAndPrintSettings(){
    this.settings.setDarkMode(true);
    this.settings.setFontSize(15);
    console.log(this.settings.getDarkMode(), this.settings.getFontSize());
  }
}

const testPage = new TestPage();
testPage.logSettings();
testPage.setAndPrintSettings();

// 이 접근법의 이점
// 기대한대로 동작하고, 잘못 사용할 위험을 줄인다.
// 쉽게 확장 가능하다. 
// 테스트에 용이하다.
// 복잡도가 낮으며 getInstance 메소드를 따로 쓰지 않아도 된다.