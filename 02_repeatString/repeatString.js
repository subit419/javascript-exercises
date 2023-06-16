const repeatString = function(string, repeatNumber) {
    if (repeatNumber < 0) {
        return "ERROR";
    }
    let returnString = "";
    for (let i = 0; i < repeatNumber; i++){
        returnString += string;    
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
