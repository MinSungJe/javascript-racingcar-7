import Car from '../src/Model/Car.js';
import RacingGame from '../src/Service/RacingGame.js';

describe('RacingGame Service 테스트', () => {
  const car1 = new Car('자동차1', 5);
  const car2 = new Car('자동차2', 6);
  const racingGame = new RacingGame([car1, car2], 5);
  test('RacingGame에는 여러 자동차가 있다.', () => {
    expect(racingGame.carList.filter((car) => !(car instanceof Car))).toEqual([]);
  });

  test('RacingGame에서 몇 번의 이동을 할 지 정할 수 있다.', () => {
    expect(racingGame.count).toBe(5);
  });

  test('RacingGame에 참전한 자동차 중 가장 멀리간 정도를 찾는다.', () => {
    expect(racingGame.getMaxPosition()).toBe(6);
  });

  test('RacingGame에 참전한 자동차 중 가장 멀리간 자동차 이름을 찾는다.', () => {
    expect(racingGame.getWinnerName()).toEqual(['자동차2']);
  });
});
