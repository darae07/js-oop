type GeoLoc = [number, number];

class GeoLocation {
  geoLoc: GeoLoc;
  constructor() {
    this.geoLoc = [0, 0];
  }
  getGeoLoc(): GeoLoc {
    return this.geoLoc;
  }
}

export { GeoLocation };
