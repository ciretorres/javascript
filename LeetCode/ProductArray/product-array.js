/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        let numsFilter = nums.filter(n => n != nums[i])
        let product = numsFilter.reduce((a, b) => a * b);
        answer.push(product)
    }
    return answer;  
};

// expected [24,12,8,6]
console.log(productExceptSelf([1,2,3,4]));

// expected [0,0,9,0,0]
console.log(productExceptSelf([-1,1,0,-3,3]));