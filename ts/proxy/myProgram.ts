import {RealThumbnail, ProxyThumbnail, Thumbnail} from './thumbnail'

class MyProgram {
  thumbnails: Thumbnail[]
  constructor(){
    this.thumbnails = []

    this.thumbnails.push(new ProxyThumbnail('1', '/1.mp4'))
    this.thumbnails.push(new ProxyThumbnail('2', '/2.mp4'))
    this.thumbnails.push(new ProxyThumbnail('3', '/3.mp4'))
    this.thumbnails.push(new ProxyThumbnail('4', '/4.mp4'))

    this.thumbnails.forEach(thumbnail=>{
      thumbnail.showTitle();
    })

    this.thumbnails[2].showPreview()
    this.thumbnails[2].showPreview()
    this.thumbnails[0].showPreview()
    this.thumbnails[1].showPreview()
  }
}

const program = new MyProgram()