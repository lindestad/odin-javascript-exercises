function roundToOneDigit(n) {
  return Math.round(n * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5/9);
  return roundToOneDigit(celcius);
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * (9/5)) + 32;
  return roundToOneDigit(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
