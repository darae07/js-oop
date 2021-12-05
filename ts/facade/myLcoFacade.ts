import { GeoLocation } from "./geoLocation";
import { InternetConnection, InternetData } from "./internetConnection";
import { Json, AdressResult } from "./json";

class MyLocFacade {
  myGeoLoc: [number, number];
  conn: InternetConnection;
  data: InternetData;
  adress: AdressResult;

  public printMyAddress(): void {
    this.myGeoLoc = new GeoLocation().getGeoLoc();

    this.conn = new InternetConnection();
    this.conn.connect();
    this.data = this.conn.getDatas("https://주소", this.myGeoLoc);
    this.conn.disconnect();

    this.adress = new Json().parse(this.data);
    console.log(this.adress.get("address"));
  }
}

export { MyLocFacade };
