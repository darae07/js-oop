import { Mode } from "./modeSwitch";

interface ModeListener {
  onModeChange(mode: Mode): void;
}

class ListView implements ModeListener {
  onModeChange(mode: Mode): void {
    console.log("리스트뷰 " + (mode === Mode.LIST ? "보여줌" : "감춤"));
  }
}

class GalleryView implements ModeListener {
  onModeChange(mode: Mode): void {
    console.log("갤러리뷰 " + (mode === Mode.GALLERY ? "보여줌" : "감춤"));
  }
}

class DataDownloader implements ModeListener {
  onModeChange(mode: Mode): void {
    console.log(
      (mode === Mode.LIST ? "리스트" : "갤러리") + "뷰용 데이터 다운로드",
    );
  }
}

export {ModeListener, ListView, GalleryView, DataDownloader}