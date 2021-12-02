interface Thumbnail {
  showTitle(): void;
  showPreview(): void;
}

class RealThumbnail implements Thumbnail {
  private title: string;
  private movieUrl: string;

  constructor(title: string, movieUrl: string) {
    this.title = title;
    this.movieUrl = movieUrl;
    console.log(this.movieUrl + "로부터 " + title + "의 영상 데이터 다운");
  }

  public showTitle(): void {
    console.log("제목: " + this.title);
  }
  public showPreview(): void {
    console.log(this.title + "의 프리뷰 재생");
  }
}

class ProxyThumbnail implements Thumbnail {
  private title: string;
  private movieUrl: string;

  private realThumbnail: RealThumbnail;

  constructor(title: string, movieUrl: string) {
    this.title = title;
    this.movieUrl = movieUrl;
  }

  public showTitle(): void {
    console.log("제목:" + this.title);
  }

  public showPreview(): void {
    if (this.realThumbnail === undefined) {
      this.realThumbnail = new RealThumbnail(this.title, this.movieUrl);
    }
    this.realThumbnail.showPreview();
  }
}

export { RealThumbnail, Thumbnail, ProxyThumbnail };
