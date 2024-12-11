import Validator from '../src/Service/Validator.js';

describe('Validator 서비스 테스트', () => {
  test.each([
    ['자동차,자동차1,자동차2', true],
    ['자동차이름,이너무길어버림', false],
    [',자동차,자동차2', false],
    ['', false],
  ])('checkCarName(%s) 결과는 %s다.', (input, result) => {
    expect(Validator.checkCarName(input)).toBe(result);
  });

  test.each([
    ['0', true],
    ['1', true],
    ['10', true],
    ['-1', false],
    ['hey', false],
    ['1e3', false],
  ])('checkMoveCount(%s) 결과는 %s다.', (input, result) => {
    expect(Validator.checkMoveCount(input)).toBe(result);
  });
});
