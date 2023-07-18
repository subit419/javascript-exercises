const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbersToSum) {
	return numbersToSum.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function() {
  var subTotal = 1;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(arg => {
    subTotal *= arg;
  });

  return subTotal;
};

const power = function(number, power) {
	return Math.pow(number,power);
};

const factorial = function(n) {
  let answer = 1;
	if (n == 0 || n == 1){
    return answer;
  } else {
    for (let i = n; i >= 1; i--) {
      answer *= i;
    }
  }

  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
