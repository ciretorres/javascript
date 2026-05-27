// /**
//  * Complete the 'getNextSpecialString' function below.
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
//  */

// function getNextSpecialString(s,k) {
//     // Write your code here
//     // let length = s.length;
//     // console.log(length)
//     // let n = s.length;
     
//     // s = s.split('').sort().reverse().join('');
     
//     // let i = 0;
//     // while (i < n && s[i] === s[i]) {
//     //     i++;
//     // }
//     // let start = i;
     
//     // let ch = 'a';
//     // let idx = -1;
//     // while (i < n) {
//     //     if (s[i] >= ch) {
//     //         ch = s[i];
//     //         idx = i;
//     //     }
//     //     i++;
//     // }
//     // let ans = s.substring(0, start) + ch + s.substring(start, idx) + (idx + 1 < n ? s.substring(idx + 1) : '');
//     // console.log(ans);
//     var n = s.length;
 
//         // to store unique characters of the string
//         var v = [];
 
//         // to check uniqueness
//         var mp = {};
 
//         for (var i = 0; i < s.length; i++) {
//           if (!mp.hasOwnProperty(s[i])) {
//             // if mp[s[i]] = 0 then it is
//             // first time
//             mp[s[i]] = 1;
//             v.push(s[i]);
//           }
//         }
 
//         // sort the unique characters
//         v.sort((a, b) => a - b);
 
//         // simply add n-k smallest characters
//         if (k > n) {
//         //   document.write(s.join(""));
//           for (var i = n; i < k; i++) {
//             // document.write(v[0]);
//           }
 
//           return; // end the program
//         }
 
//         // searching the first character left of
//         // index k and not equal to greatest
//         // character of the string
//         for (var i = k - 1; i >= 0; i--) {
//           if (s[i] !== v[v.length - 1]) {
//             for (var j = 0; j < i; j++) {
//             //   document.write(s[j]);
//             }
 
//             // finding the just next greater
//             // character than s[i]
//             for (var j = 0; j < v.length; j++) {
//               if (v[j] > s[i]) {
//                 // document.write(v[j]);
//                 break;
//               }
//             }
 
//             // suffix with smallest character
//             for (var j = i + 1; j < k; j++) {
//               document.write(v[0]);
//             }
//             return;
//           }
//         }
 
//         // if we reach here then all indices to the left
//         // of k had the greatest character
//         // document.write(
//         //   "No lexicographically greater " +
//         //     "string of length " +
//         //     k +
//         //     " possible here."
//         // );
//     return -1;
// }


// // Driver code
// var s = "abccde";
// var k = 3;
// // expected abcdab
// // console.log(getNextSpecialString(s.split(""), k));

// // // expected -1
// // console.log(getNextSpecialString("zzab"));

// function lexNext( s, n){   
//     // Iterate from last character
//     for (let i = n - 1; i >= 0; i--) 
//     {   
//         // If not 'z', increase by one
//         if (s[i] != 'z') 
//         {
//             let code = s.charCodeAt(i)+1;
//             let str = String.fromCharCode(code);
//             return s.substr(0,i)+str+s.substr(i+1);
 
//         }
         
//         // if 'z', change it to 'a'
//         s[i] = 'a'; 
//     }
     
// }
 
// // Driver Code
// let S = "abccde";
// let T = "abcfgh";
// let n = S.length;
// let res = lexNext(S, n);

// console.log(res)

// console.log("bacatf" < "tbacaf");


function lexolarge(s, tmp) {
    let n = s.length;
     
    tmp = tmp.split('').sort().reverse().join('');
     
    let i = 0;
    while (i < n && s[i] === tmp[i]) {
        i++;
    }
    let start = i;
     
    let ch = 'a';
    let idx = -1;
    while (i < n) {
        if (s[i] >= ch) {
            ch = s[i];
            idx = i;
        }
        i++;
    }
    let ans = s.substring(0, start) + ch + s.substring(start, idx) + (idx + 1 < n ? s.substring(idx + 1) : '');
    console.log(ans);
}
 
let str = "abccde";
let tmp = str;
 
lexolarge(str, tmp);
 
str = "zzab";
tmp = str;
 
lexolarge(str, tmp);
