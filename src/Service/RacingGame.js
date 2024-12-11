import getRandomPower from '../Util/getRandomPower.js';

class RacingGame {
  carList;
  count;

  constructor(carList, count) {
    this.carList = carList;
    this.count = count;
  }

  getMaxPosition() {
    return this.carList.reduce((maxPosition, car) => {
      if (maxPosition < car.position) return car.position;
    }, 0);
  }

  getWinnerName() {
    const maxPostion = this.getMaxPosition();
    return this.carList.filter((car) => car.position === maxPostion).map((car) => car.name);
  }

  moveOnce() {
    this.carList.forEach((car) => {
      const power = getRandomPower();
      car.move(power);
    });
  }

  move() {
    for (let i = 0; i < this.count; i++) this.moveOnce();
  }
}

export default RacingGame;
