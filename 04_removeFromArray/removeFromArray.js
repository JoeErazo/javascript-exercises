const removeFromArray = function(array, ...targets) {
    for(const target of targets){
        for(let i = 0; i < array.length; i++){
            if(array[i] === target){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;