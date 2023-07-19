const palindromes = function (stringToCheck) {
    var cleanedString = stringToCheck.replace(/[^\w\s\']|_/g, "")
                                     .replace(/\s+/g, "");

    var fullPhrase = [...cleanedString];
    
    for (let index = 0; index < fullPhrase.length / 2; index++) {
        var currentFrontLetter = fullPhrase[index];
        var currentBackLetter = fullPhrase[fullPhrase.length - 1 - index];

        if (currentFrontLetter.toUpperCase() != currentBackLetter.toUpperCase()){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
