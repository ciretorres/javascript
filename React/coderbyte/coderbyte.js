function WordSplit(strArr) {

    // code goes here
    let subStrArr = strArr[1].split(',')

    subStrArr.forEach( element => {
        subStrArr.forEach(elemento => {            
            if(strArr[0] === element + elemento){                 
                strArr = element + "," + elemento
            }
        });
    });
    return strArr;
}

function readline(){
    // return ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
    return ["baseball", "a,all,b,ball,base,cat,code,d,e,quit,z"]
}

// Keep this function call here
console.log(WordSplit(readline()))