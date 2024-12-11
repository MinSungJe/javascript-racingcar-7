import getRandomPower from '../Util/getRandomPower.js';
import OutputView from '../View/OutputView.js';

class RacingGame {
  carList;
  count;

  constructor(carList, count) {
    this.carList = carList;
    this.count = count;
  }

  getMaxPosition() {
    return this.carList.reduce((maxPosition, car) => {
      return Math.max(maxPosition, car.position);
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
    this.printStatus();
  }

  printStatus() {
    this.carList.forEach((car) =>
      OutputView.printMessage(`${car.name} : ${'-'.repeat(car.position)}`)
    );
    OutputView.printBlank();
  }

  move() {
    for (let i = 0; i < this.count; i++) this.moveOnce();
  }
}

export default RacingGame;
