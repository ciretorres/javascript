/**
 * @param {number[]} nums
 * @returns {number}
 */

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1;    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] <= nums[right]) {            
            right = mid;
        } else {         
            left = mid + 1;   
        }       
    }
    return nums[left];
};

// expected 1
console.log(findMin([3,4,5,1,2]));

// expected 0
console.log(findMin([4,5,6,7,0,1,2]));

// expected 11
console.log(findMin([11,13,15,17]));