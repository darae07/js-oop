class Thumbnail {
  showTitle (){};
  showPreview(){};
};

class RealThumbnail extends Thumbnail {
  constructor(title, movieUrl){
    super();
    this.title = title;
    this.movieUrl = movieUrl;
    console.log(`${this.movieUrl}로부터 ${this.title}의 영상 데이터 다운`);
  };

  showTitle() {
    console.log(`제목: ${this.title}`);
  };

  showPreview() {
    console.log(`${this.title}의 프리뷰 재생`)
  };
};

class ProxyThumnail extends Thumbnail {
  constructor(title, movieUrl){
    super();
    this.title = title;
    this.movieUrl = movieUrl;
  };

  realThumbnail = null;

  showPreview() {
    if(this.realThumbnail === null){
      this.realThumbnail = new RealThumbnail(this.title, this.movieUrl);
    }
    this.realThumbnail.showPreview();
  };
}

exports.ProxyThumnail = ProxyThumnail;