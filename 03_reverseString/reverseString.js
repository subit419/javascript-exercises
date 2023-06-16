const reverseString = function(reverseThis) {
    var stringArray = reverseThis.split("");
    var reverseArray = stringArray.reverse();
    return reverseArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
