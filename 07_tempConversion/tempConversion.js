const convertToCelsius = function(farenheit) {
  let convertedTemp = ((farenheit - 32) * (5/9));
  let roundedResult = Math.round(convertedTemp * 10) / 10;


  return roundedResult;   
};


const convertToFahrenheit = function(celsius) {
  let convertedTemp = (celsius * (9/5) + 32 );
  let roundedResult = Math.round(convertedTemp * 10) / 10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
