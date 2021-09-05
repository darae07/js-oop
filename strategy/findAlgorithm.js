// interface가 기존 전략과 다르게 작성됨 

class FindAlgorithm {
  find (global) {};
};

class FindMovieAlgorithm extends FindAlgorithm {
  find (global) {
    console.log(`find movie ${global ? 'globally' : ''}`);
    // 동영상 검색하는 코드
    // ..
  };
};

exports.FindMovieAlgorithm = FindMovieAlgorithm;
