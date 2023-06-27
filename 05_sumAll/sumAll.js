const sumAll = function(int1, int2) {
    // Find the smaller of the two integers
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }



    console.log(typeof int1);
    console.log(typeof int2);
    console.log("is int1 a number: "+ (typeof int1 === "number"))
    console.log("is int2 a number: "+ (typeof int2 === "number"))

    if ((typeof int1 !== "number") || (typeof int2 !== "number")) {
        return "ERROR";
    }

    let lowerNumber = Math.min (int1, int2);
    let higherNumber = Math.max (int1, int2);
    let sum = 0

    // Iterate through all the numbers between them
    for (let i = lowerNumber; i <= higherNumber; i++){
        sum += i;
    }
    return sum;
    // 

};

// Do not edit below this line
module.exports = sumAll;
