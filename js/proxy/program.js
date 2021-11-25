const {ProxyThumnail} = require('./thumbnail');

class Program {
  constructor(){
    this.thumbnails = [];
    this.thumbnails.push(new ProxyThumnail('Git 강좌', '/git.mp4'));
    this.thumbnails.push(new ProxyThumnail('Rest API란?', '/rest-api.mp4'));
    this.thumbnails.push(new ProxyThumnail('도커 사용법', '/docker.mp4'));
    this.thumbnails.push(new ProxyThumnail('객체지향 프로그래밍', '/oodp.mp4'));
    this.thumbnails.push(new ProxyThumnail('블록체인의 원리', '/blockchain.mp4'));
  
    for (const thumbnail of this.thumbnails) {
      thumbnail.showTitle();
    };

    this.thumbnails[2].showPreview();
    this.thumbnails[2].showPreview();
    this.thumbnails[4].showPreview();
    this.thumbnails[1].showPreview();
  }
}

const program = new Program();