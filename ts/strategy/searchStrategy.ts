interface SearchStrategy {
  search(): void
}

class SearchStrategyAll implements SearchStrategy {
  search(): void {
    console.log('search all')
  }
}

class SearchStrategyImage implements SearchStrategy {
  search(): void {
    console.log('search image')
  }
}

class SearchStrategyNews implements SearchStrategy {
  search(): void {
    console.log('search news')
  }
}

class SearchStrategyMap implements SearchStrategy {
  search(): void {
    console.log('search map')
  }
}

export { SearchStrategy, SearchStrategyAll, SearchStrategyImage, SearchStrategyNews, SearchStrategyMap }