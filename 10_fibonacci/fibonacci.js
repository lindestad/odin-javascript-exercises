const fibonacci = function(target) {
    const max_iterations = 1000;
    if (target>= max_iterations) {
        throw Error("Exceeded loop iteration limit.")
    }
    target = Number(target);
    if (target < 0) {
        return "OOPS";
    }
    if (target === 0) {
        return 0;
    }
    let next = 0;
    let current = 1;
    let previous = 1;
    for (let i=2; i<target; i++) {
        next = current + previous;
        previous = current;
        current = next;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
