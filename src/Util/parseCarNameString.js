import Car from '../Model/Car.js';

const parseCarNameString = (carNameString) => {
  return carNameString.split(',').map((carName) => new Car(carName));
};

export default parseCarNameString;
