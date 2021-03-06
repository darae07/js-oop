const SearchButton = require('./searchButton');
const { SearchStrategyAll, SearchStrategyImage, SearchStrategyNews, SearchStrategyMap, SearchFindAdapter } = require('./searchStrategy');
const {FindMovieAlgorithm} = require('./findAlgorithm');
class Program{
  #searchButton = new SearchButton(this);

  // 버튼의 검색전략을 변경할 메소드 제공
  // 전략을 갈아끼우는 부분
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

  // findAlgorithm전략을 adapter로 감싸서 갈아끼움.
  setModeMovie(){
    this.#searchButton.setSearchStrategy(new SearchFindAdapter(new FindMovieAlgorithm()));
  }
  testProgram(){
    this.#searchButton.onClick();
    this.setModeImage();
    this.#searchButton.onClick();
    this.setModeNews();
    this.#searchButton.onClick();
    this.setModeMap();
    this.#searchButton.onClick();
    this.setModeMovie();
    this.#searchButton.onClick();
  }
}

module.exports = Program;