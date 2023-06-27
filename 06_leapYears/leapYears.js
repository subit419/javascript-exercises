const leapYears = function(year) {

    // check if it is divisible by 4
    // if it is also divisible by 100 then it is not a leap year 
    // unless it is divisible by 400 then it is.
    if (year % 4 == 0) {
        if ((year % 100 == 0) && (year % 400 == 0)) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
