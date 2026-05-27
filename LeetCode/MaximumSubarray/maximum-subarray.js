/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0]
    let total = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (total < 0) {
    //         total = 0;
    //     }
    //     total += nums[i];
    //     res = Math.max(res, total);        
    // }
    nums.forEach(e => {
        if (total < 0) {
            total = 0;
        }
        total += e;
        res = Math.max(res, total);        
    });
    return res;
};

// expected 6
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// // expected 1
// console.log(maxSubArray([1]));

// // expected 23
// console.log(maxSubArray([5,4,-1,7,8]));