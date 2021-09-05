// 전략 패턴: 객체들이 할 수 있는 행위 각각에 대한 클래스를 생성하고, 
// 유사한 행위들을 캡슐화하는 인터페이스를 정의하여,
// 객체의 행위를 동적으로 바꾸고 싶은 경우 직접 행위를 수정하지 않고 전략을 바꾸는 접근으로 행위를 유연하게 확장하는 방법.

// 객체가 할 수 있는 행위들 각각을 전략으로 만들어 놓고, 동적으로 행위의 수정이 필요한 경우
// 전략을 바꾸는 것 만으로 행위의 수정이 가능하도록 만든 패턴.


// interface 대신 class 상속을 이용.
// 모든 검색전략 클래스가 같은 메소드를 가지도록 보장함.
class SearchStrategy{
  search(){};
};

// 검색 이후 액션은 각각의 클래스에서 수정해주면 됨. 
class SearchStrategyAll extends SearchStrategy{
  search(){
    super.search();
    console.log('search all');
    //...
  };
};

class SearchStrategyImage extends SearchStrategy{
  search(){
    super.search();
    console.log('search image');
    //...
  }
};

class SearchStrategyNews extends SearchStrategy{
  search(){
    super.search();
    console.log('search news');
    //...
  }
};

class SearchStrategyMap extends SearchStrategy{
  search(){
    super.search();
    console.log('search map');
    //...
  }
};

// adapter 추가
class SearchFindAdapter extends SearchStrategy {
  //findAlgorithm을 상속받은 객체를 저장
  constructor(_findAlogrithm){
    super();
    this.findAlgorithm = _findAlogrithm;
  }

  search(){
    super.search();
    this.findAlgorithm.find(true);
  };
};

exports.SearchStrategyAll = SearchStrategyAll;
exports.SearchStrategyImage = SearchStrategyImage;
exports.SearchStrategyNews = SearchStrategyNews;
exports.SearchStrategyMap = SearchStrategyMap;
exports.SearchFindAdapter = SearchFindAdapter;