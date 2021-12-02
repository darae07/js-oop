import { FindAlgorithm, FindMovieAlgorithm } from "./findAlgorithm";

interface SearchStrategy {
  search(): void;
}

class SearchStrategyAll implements SearchStrategy {
  search(): void {
    console.log("search all");
  }
}

class SearchStrategyImage implements SearchStrategy {
  search(): void {
    console.log("search image");
  }
}

class SearchStrategyNews implements SearchStrategy {
  search(): void {
    console.log("search news");
  }
}

class SearchStrategyMap implements SearchStrategy {
  search(): void {
    console.log("search map");
  }
}

class SearchFindAdapter implements SearchStrategy {
  private findAlgorithm: FindAlgorithm;

  constructor(findAlgorithm: FindAlgorithm) {
    this.findAlgorithm = findAlgorithm;
  }
  search(): void {
    this.findAlgorithm.find(true);
  }
}
export {
  SearchStrategy,
  SearchStrategyAll,
  SearchStrategyImage,
  SearchStrategyNews,
  SearchStrategyMap,
  SearchFindAdapter,
};
