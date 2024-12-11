import RacingGame from '../Service/RacingGame.js';
import OutputView from '../View/OutputView.js';

class RacingController {
  racingGame;

  constructor(carList, count) {
    this.racingGame = new RacingGame(carList, count);
  }

  run() {
    OutputView.printRacingTitle();
    this.racingGame.move();
    OutputView.printFinalWinner(this.racingGame.getWinnerName());
  }
}

export default RacingController;
