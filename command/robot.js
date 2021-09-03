class Robot {
  Direction = {LEFT: 'l', RIGHT: 'r'};
  // aditional code - 로봇의 좌표를 기록
  Defense = {EAST: 'e', SOUTH: 's', WEST: 'w', NORTH: 'n'};
  DefenseKeys = ['e', 's', 'w', 'n'];

  eye = 'e';
  position = [0, 0];

  moveForward (space) {
    console.log(`${space} 칸 전진`);

    // aditional code
    const [x, y] = this.position;
    if (this.eye === this.Defense.EAST) {
      this.position = [x + space, y];
    }
    if (this.eye === this.Defense.WEST) {
      this.position = [x - space, y];
    }
    if (this.eye === this.Defense.SOUTH) {
      this.position = [x, y - space];
    }
    if (this.eye === this.Defense.NORTH) {
      this.position = [x, y + space];
    }
    console.log(`현재위치: ${this.position}`);
  };

  turn (_derection) {
    console.log(
      (_derection === this.Direction.LEFT ? '왼쪽' : '오른쪽') + '으로 방향전환'
    ); 
    // aditional code
    const eyeIndex = this.DefenseKeys.indexOf(this.eye);
    if (_derection === this.Direction.LEFT) {
      const prev = this.DefenseKeys[eyeIndex - 1];
      this.eye = prev || 'n';
    }
    if (_derection === this.Direction.RIGHT) {
      const next = this.DefenseKeys[eyeIndex + 1];
      this.eye = next || 'e';
    }
    console.log(`현재방향: ${this.eye}`);
  };

  pickup () {
    console.log('앞의 물건 집어들기');
  };
};

module.exports = Robot;