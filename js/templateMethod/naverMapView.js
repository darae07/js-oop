const { MapView } = require("./mapView");

class NaverMapView extends MapView {
  connectMapServer() {
    console.log("네이버 지도 서버에 연결");
  }
  showMapOnScreen() {
    console.log("네이버 지도를 보여줌");
  }
  moveToCurrentLocation() {
    console.log("네이버 지도에서 현 좌표로 이동");
  }
}

exports.NaverMapView = NaverMapView;
