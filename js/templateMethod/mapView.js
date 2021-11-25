class MapView {
  connectMapServer() {}
  showMapOnScreen() {}
  moveToCurrentLocation() {}

  initMap() {
    this.connectMapServer();
    this.showMapOnScreen();
    this.moveToCurrentLocation();
  }
}

exports.MapView = MapView;
