import getRandomPower from '../src/Util/getRandomPower.js';

describe('랜덤 함수 테스트', () => {
  test('랜덤으로 얻은 값은 특정 범위 이내이다.', () => {
    const value = getRandomPower();
    expect(value >= 0 && value <= 9).toBe(true);
  });
});
