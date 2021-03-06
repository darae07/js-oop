import SearchButton from "./searchButton";
import {
  SearchStrategyAll,
  SearchStrategyImage,
  SearchStrategyMap,
  SearchStrategyNews,
  SearchFindAdapter,
} from "./searchStrategy";
import { FindAlgorithm } from "./findAlgorithm";
import { FindMovieAlgorithm } from "../../js/strategy/findAlgorithm";

class MyProgram {
  private searchButton: SearchButton = new SearchButton(this);

  setModeAll(): void {
    this.searchButton.setSearchStrategy(new SearchStrategyAll());
  }

  setModeImage(): void {
    this.searchButton.setSearchStrategy(new SearchStrategyImage());
  }

  setModeNews(): void {
    this.searchButton.setSearchStrategy(new SearchStrategyNews());
  }

  setModeMap(): void {
    this.searchButton.setSearchStrategy(new SearchStrategyMap());
  }

  setModeMovie() {
    this.searchButton.setSearchStrategy(
      new SearchFindAdapter(new FindMovieAlgorithm()),
    );
  }
  testProgram(): void {
    this.searchButton.onClick();
    this.setModeImage();
    this.searchButton.onClick();
    this.setModeNews();
    this.searchButton.onClick();
    this.setModeMap();
    this.searchButton.onClick();
    this.setModeMovie();
    this.searchButton.onClick();
  }
}

export default MyProgram;
