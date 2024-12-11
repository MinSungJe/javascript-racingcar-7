import { Random } from '@woowacourse/mission-utils';

const getRandomPower = () => {
  return Random.pickNumberInRange(0, 9);
};

export default getRandomPower;
