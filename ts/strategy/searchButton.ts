import { SearchStrategy, SearchStrategyAll, SearchStrategyImage, SearchStrategyNews, SearchStrategyMap } from './searchStrategy'
import MyProgram from './myProgram'

class SearchButton {
  private myProgram: MyProgram

  constructor(myProgram) {
    this.myProgram = myProgram
  }

  private serachStrategy: SearchStrategy = new SearchStrategyAll()

  setSearchStrategy(searchStrategy: SearchStrategy): void {
    this.serachStrategy = searchStrategy
  }

  onClick(): void {
    this.serachStrategy.search()
  }
}

export default SearchButton