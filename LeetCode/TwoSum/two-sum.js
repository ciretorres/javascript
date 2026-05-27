/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let indices = [];
//     for (let i = 0; i < nums.length; i++) {
//         // for (let j = 1; j < nums.length; j++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j];
//             // if (sum === target) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j];
//             }
//         }        
//     }
//     // Return an empty array if no solution is found
//     return [];
// };
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    // If no valid pair is found, return an empty array
    return [];
};

// expected [1,2]
console.log(twoSum([3,2,4], 6));

// expected [0,1]
console.log(twoSum([2,7,11,15], 9));

// expected [0,1]
console.log(twoSum([3,3], 6));