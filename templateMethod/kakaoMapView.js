const { MapView } = require("./mapView");

class KakaoMapView extends MapView {
  connectMapServer() {
    console.log("카카오 지도 서버에 연결");
  }
  showMapOnScreen() {
    console.log("카카오 지도를 보여줌");
  }
  moveToCurrentLocation() {
    console.log("카카오 지도에서 현 좌표로 이동");
  }
}

exports.KakaoMapView = KakaoMapView;
