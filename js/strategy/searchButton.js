const {SearchStrategyAll} = require('./searchStrategy');

class SearchButton{
  constructor(program){
    this.program = program;
  }
  // 버튼에서 검색전략을 가짐.
  // 버튼 생성시 기본 검색전략을 전체검색으로 설정
  #searchStrategy = new SearchStrategyAll();

  setSearchStrategy(newStrategy){
    this.#searchStrategy = newStrategy;
  };

  onClick(){
    this.#searchStrategy.search();
  }
}

module.exports = SearchButton;