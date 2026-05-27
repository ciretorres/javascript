/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }        
    }
    return false;
};

// expected true
console.log(containsDuplicate([1,2,3,1]));

// expected false
console.log(containsDuplicate([1,2,3,4]));

// expected true
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));