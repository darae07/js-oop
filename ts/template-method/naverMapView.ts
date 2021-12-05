import { format } from "path";
import { MapView } from "./mapView";

class NaverMapView extends MapView {
  protected connectMapServer(): void {
    console.log("네이버 지도 서버 연결");
  }

  protected showMapOnScreen(): void {
    console.log("네이버 지도 보여줌");
  }

  protected moveTocurrentLocation(): void {
    console.log("네이버 지도에서 현 좌표로 이동");
  }
}

export { NaverMapView };
