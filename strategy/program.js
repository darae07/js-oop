const SearchButton = require('./searchButton');
const { SearchStrategyAll, SearchStrategyImage, SearchStrategyNews, SearchStrategyMap } = require('./searchStrategy');

class Program{
  #searchButton = new SearchButton(this);

  // 버튼의 검색전략을 변경할 메소드 제공
  setModeAll(){
    this.#searchButton.setSearchStrategy(new SearchStrategyAll());
  };

  setModeImage(){
    this.#searchButton.setSearchStrategy(new SearchStrategyImage());
  };

  setModeNews(){
    this.#searchButton.setSearchStrategy(new SearchStrategyNews());
  };

  setModeMap(){
    this.#searchButton.setSearchStrategy(new SearchStrategyMap());
  };

  testProgram(){
    this.#searchButton.onClick();
    this.setModeImage();
    this.#searchButton.onClick();
    this.setModeNews();
    this.#searchButton.onClick();
    this.setModeMap();
    this.#searchButton.onClick();
  }
}

module.exports = Program;