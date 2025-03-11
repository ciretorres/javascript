function StringChallengue(str) {
    // code goes here

    // convert toLowerCase
    str = str.toLowerCase();
    // console.log(str)

    // remove non-alphanumeric characters
    str = str.replace(/[^A-Za-z0-9]/g, '');
    // console.log(str)

    // split letters or char into indexes of an array
    strSplit = str.split('')
    // console.log(strSplit)

    // reverse letters or indexes of the array
    // tiene que ser array para revertir el orden
    let strReverse = strSplit.reverse()
    // console.log(strReverse)
    
    // join indexes values
    strReverse = strReverse.join('')

    // compare condition
    str = str === strReverse ? true : false

    return str;
}

function readline(){
    // return 'Noel - sees Leon'
    // return 'A war at Tarawa!'
    return 'Anne, I vote more cars race Rome-to-Vienna'
}

// keep this function call here
console.log(StringChallengue(readline()));

function StringChallengue2([str, num]) {
    // code goes here
    // console.log(str)

    var result = '';
    var charcode = 0;

    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    result = result.replace(/[^A-Za-z0-9]/g, ' ');
    return str = result;
}

function readline2(){
    return (['Hello', 4]);
}

// keep this function call here
console.log(StringChallengue2(readline2()));
console.log(StringChallengue2(['abc', 0]));
console.log(StringChallengue2(['Caesar Cipher', 2]));