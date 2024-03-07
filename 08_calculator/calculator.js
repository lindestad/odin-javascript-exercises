const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
  return arr.reduce( (a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce( (a, b) => a * b);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(i) {
  if (i === 0) {
    return 1;
  }
  let ans = 1;
  for (let x = i; x>0; --x) {
    console.log(x);
    ans = ans * (x);
  }
  return ans;
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
