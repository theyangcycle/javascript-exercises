const reverseString = function(str) {
    newstr = ''
    for (let i = str.length - 1; i >= 0; i-- ) {
        newstr += str.charAt(i)
    }
    return newstr
};

// Do not edit below this line
module.exports = reverseString;
