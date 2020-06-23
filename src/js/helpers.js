const calcPercent = (min, max, value) => Math.floor((100 * (value - min) / (max - min)))/100;

const helpers = {
  calcPercent
};

module.exports = helpers;