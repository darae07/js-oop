type InternetData = string;

class InternetConnection {
  public connect(): void {}
  public getDatas(url: string, param: Object): InternetData {
    return "";
  }
  public disconnect(): void {}
}

export { InternetConnection, InternetData };
