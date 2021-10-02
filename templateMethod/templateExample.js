const { NaverMapView } = require("./naverMapView");
const { KakaoMapView } = require("./kakaoMapView");

class TemplateExample {
  constructor() {
    this.kakaoMap = new KakaoMapView().initMap();
    this.naverMap = new NaverMapView().initMap();
  }
}

const templateExample = new TemplateExample();