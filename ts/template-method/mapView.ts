abstract class MapView {
  protected abstract connectMapServer():void
  protected abstract showMapOnScreen():void
  protected abstract moveTocurrentLocation():void

  public initMap():void{
    this.connectMapServer();
    this.showMapOnScreen()
    this.moveTocurrentLocation()
  }
}

export {MapView}