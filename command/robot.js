class Robot {
  Direction = {LEFT: 'l', RIGHT: 'r'};

  moveForward (space) {
    console.log(`${space} 칸 전진`);
  };

  turn (_derection) {
    console.log(
      (_derection === this.Direction.LEFT ? '왼쪽' : '오른쪽') + '으로 방향전환'
    ); 
  };

  pickup () {
    console.log('앞의 물건 집어들기');
  };
};

module.exports = Robot;