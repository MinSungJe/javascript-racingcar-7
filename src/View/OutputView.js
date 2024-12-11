import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printRacingTitle() {
    this.printBlank();
    this.printMessage('실행 결과');
  },

  printFinalWinner(winnerList) {
    this.printMessage(`최종 우승자 : ${winnerList.join(', ')}`);
  },
};

export default OutputView;
