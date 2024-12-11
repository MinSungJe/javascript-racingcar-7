import { Console } from '@woowacourse/mission-utils';
import Validator from '../Service/Validator.js';

const InputView = {
  async getCarNameString() {
    const carNameString = await Console.readLineAsync('경주할 자동차 이름 입력하셈\n');
    if (!Validator.checkCarName(carNameString)) throw new Error('[ERROR] zz');
    return carNameString;
  },

  async getMoveCount() {
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    if (!Validator.checkMoveCount(moveCount)) throw new Error('[ERROR]');
    return moveCount;
  },
};

export default InputView;
