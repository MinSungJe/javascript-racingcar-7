import Car from '../src/Model/Car.js';

describe('Car 클래스 테스트', () => {
  test('Car는 이름과 위치 정보를 담고 있다.', () => {
    const car = new Car('자동차', 2);
    expect(car.position).toBe(2);
  });

  test('Car의 이름은 5자 이하이어야 한다.', () => {
    const name = '6자이상의이름';
    expect(() => {
      new Car(name);
    }).toThrow();
  });

  test.each([4, 5, 6, 7, 8, 9])('Car에게 %s 주어지면 움직인다.', (power) => {
    const car = new Car('자동차');
    car.move(power);
    expect(car.position).toBe(1);
  });

  test.each([0, 1, 2, 3])('Car에게 %s 주어지면 움직이지 않는다.', (power) => {
    const car = new Car('자동차');
    car.move(power);
    expect(car.position).toBe(0);
  });
});
