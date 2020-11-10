let str = 'hello world'
    
function letterCapitalize() {
    let newStr = str.split(' ');
    let res = ''

    for (let i = 0; i < newStr.length; i++) {
        res += newStr[i][0].toUpperCase() + newStr[i].substr(1) + ' ';
    }

    return res;
}

console.log(letterCapitalize(str))

