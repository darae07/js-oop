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

exports.SearchStrategyAll = SearchStrategyAll;
exports.SearchStrategyImage = SearchStrategyImage;
exports.SearchStrategyNews = SearchStrategyNews;
exports.SearchStrategyMap = SearchStrategyMap;