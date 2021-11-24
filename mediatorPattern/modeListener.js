class ModeListener {
  onModeChange(mode) {}
}

class ListView extends ModeListener {
  onModeChange(mode) {
    console.log("리스트뷰 " + (mode === "LIST" ? "보여줌" : "감춤"));
  }
}

class GalleryView extends ModeListener {
  onModeChange(mode) {
    console.log("갤러리뷰 " + (mode === "GALLERY" ? "보여줌" : "감춤"));
  }
}

class DataDownloader extends ModeListener {
  onModeChange(mode) {
    console.log(
      (mode === "LIST" ? "리스트" : "갤러리") + "뷰용 데이터 다운로드",
    );
  }
}

exports.ListView = ListView;
exports.GalleryView = GalleryView;
exports.DataDownloader = DataDownloader;
