interface FindAlgorithm {
  find(global: boolean): void;
}

class FindMovieAlgorithm implements FindAlgorithm {
  public find(global: boolean): void {
    console.log("find movie" + global ? "globally" : "");
  }
}

export {FindAlgorithm, FindMovieAlgorithm}