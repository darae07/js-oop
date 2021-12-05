import { KakaoMapView } from "./kakaoMapView";
import { NaverMapView } from "./naverMapView";

class TemplateExample {
  constructor() {
    new NaverMapView().initMap();
    new KakaoMapView().initMap();
  }
}

const myTemplate = new TemplateExample()