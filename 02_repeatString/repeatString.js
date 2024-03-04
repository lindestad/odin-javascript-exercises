function repeatString(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    else if (num === 0) {
        return '';
        
    }
    let outStr = ''
    for (let i = 0; i<num; i++) {
        outStr = outStr.concat(string);
    }
    return outStr;
};

// Do not edit below this line
module.exports = repeatString;
