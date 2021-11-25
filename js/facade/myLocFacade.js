const { GeoLocation } = require("./geoLocation");
const { InternetConnection } = require("./internetConnection");
const { Json } = require("./json");

class MyLocFacade {
  printMyAddress() {
    const myGeoLoc = new GeoLocation().getGeoLoc();

    const internetConnection = new InternetConnection();
    internetConnection.connect();
    const data = internetConnection.getData("주소_url", myGeoLoc);
    internetConnection.disconnect();

    const address = new Json().parse(data);
    console.log(address.address);
  }
}

exports.MyLocFacade = MyLocFacade;
