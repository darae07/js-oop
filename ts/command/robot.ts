enum Direction {
  LEFT,
  RIGHT,
}

class Robot {
  moveForward(space: Number): void {
    console.log(space + "칸 전진");
  }

  turn(direction: Direction): void {
    console.log(direction === Direction.LEFT ? "왼쪽" : "오른쪽");
  }

  pickup(): void {
    console.log("앞의 물건 집어들기");
  }
}

export { Robot, Direction };
