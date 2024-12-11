const Validator = {
  checkCarName(carNameString) {
    const carNameList = carNameString.split(',');
    return this.checkCarNameList(carNameList);
  },

  checkCarNameList(carNameList) {
    if (carNameList.filter((carName) => carName === '').length !== 0) return false;
    if (carNameList.filter((carName) => carName.length > 5).length !== 0) return false;
    return true;
  },

  checkMoveCount(count) {
    return (!!Number(count) || count === '0') && this.checkIsRange(count);
  },

  checkIsRange(count) {
    return Number(count) >= 0 && Number(count) <= 100;
  },
};

export default Validator;
