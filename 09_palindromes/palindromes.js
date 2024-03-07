const palindromes = function (str) {
    console.log(`String: ${str}`);
    str = str.replaceAll(/ |!|\.|&|'|,/g, '');
    console.log(`String after regex: ${str}`);
    str = str.toLowerCase();
    console.log(`String after lowercase: ${str}`);
    let reverse = str.split('').reverse('').join('');
    return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
