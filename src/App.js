import RacingController from './Controller/RacingController.js';
import parseCarNameString from './Util/parseCarNameString.js';
import InputView from './View/InputView.js';

class App {
  async run() {
    const carList = parseCarNameString(await InputView.getCarNameString());
    const moveCount = await InputView.getMoveCount();
    const racingController = new RacingController(carList, moveCount);

    racingController.run();
  }
}

export default App;
