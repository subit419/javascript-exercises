const fibonacci = function(n) {
    let seqNumberOne = 0;
    let seqNumberTwo = 1;
    let seqNumberThree = 1;

    if (n == 0) {
        return seqNumberOne;
    } else if (n < 0) {
        return "OOPS";
    }
    for (let i = 2; i <= n; i++) {
        seqNumberThree = seqNumberOne + seqNumberTwo;
        seqNumberOne = seqNumberTwo;
        seqNumberTwo = seqNumberThree;
    }
    return seqNumberTwo;
};

// Do not edit below this line
module.exports = fibonacci;
