import { MapView } from "./mapView";

class KakaoMapView extends MapView {
  protected connectMapServer(): void {
    console.log("카카오 지도 서버 연결");
  }

  protected showMapOnScreen(): void {
    console.log("카카오 지도 보여줌");
  }

  protected moveTocurrentLocation(): void {
    console.log("카카오 지도에서 현 좌표로 이동");
  }
}

export { KakaoMapView };
