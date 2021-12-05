type AdressResult = Map<string, string>;

class Json {
  result: AdressResult;
  public parse(str: string): AdressResult {
    this.result = new Map();
    this.result.set("address", "서울시 금천구");
    return this.result;
  }
}

export { Json, AdressResult };
