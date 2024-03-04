const removeFromArray = function(arr, ...remove) {
    for (let element of remove) {
        for (let index = arr.indexOf(element); index != -1; index = arr.indexOf(element)) { // handle duplicate elements in arr
            if (index != -1) {
                arr.splice(index, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
