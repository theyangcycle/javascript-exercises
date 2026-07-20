const repeatString = function(string, num) {
    newstr = ''
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++) {
        newstr += string
    }
    return newstr
};

// Do not edit below this line
module.exports = repeatString;
