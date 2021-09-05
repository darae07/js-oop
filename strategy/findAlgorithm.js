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
exports.FindAlgorithm = FindAlgorithm;