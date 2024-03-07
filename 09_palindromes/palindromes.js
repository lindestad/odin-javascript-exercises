const palindromes = function (str) {
    str = str.replaceAll(/ |!|\.|&|'|,/g, '');
    str = str.toLowerCase();
    let reverse = str.split('').reverse('').join('');
    return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
