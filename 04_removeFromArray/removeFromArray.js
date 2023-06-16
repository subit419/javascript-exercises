const removeFromArray = function(array) {
    if (arguments.length > 1) {
        for (let i = 1; i <= arguments.length - 1; i++) {
            if (array.indexOf(arguments[i]) > -1){
                array.splice(array.indexOf(arguments[i]), 1);
                
            }
        }
    }
    return array;
    

};

// Do not edit below this line
module.exports = removeFromArray;
