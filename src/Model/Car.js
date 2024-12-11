class Car {
  name;
  position;

  constructor(name, position = 0) {
    this.#validateName(name);
    this.name = name;
    this.position = position;
  }

  #validateName(name) {
    if (name.length > 5) throw new Error('[ERROR] 자동차의 이름이 너무 길어요.');
  }

  move(power) {
    if (power >= 4) this.position += 1;
  }
}

export default Car;
