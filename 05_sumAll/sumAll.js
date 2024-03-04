const sumAll = function(num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number')) { 
        // input is not a number
        return 'ERROR';
    }
    if ((num1 < 0) || (num2 < 0)) {
        // input less than 0
        return 'ERROR';
    }
    let sum = 0;
    for (let x = Math.min(num1, num2); x <= Math.max(num1, num2); x++) {
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
