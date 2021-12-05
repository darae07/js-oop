import Fighter from "./fighter";

class XWingFighter implements Fighter {
  attack(): void {
    console.log("탄환 발사");
  }
}

export default XWingFighter;
