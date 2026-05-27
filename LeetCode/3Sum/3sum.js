/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let res = [];
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        if (nums[i] > 0) {
            break;
        }
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            if (nums[j] + nums[k] === -nums[i]) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j-1]) {
                    j++;
                }
                while (nums[k] === nums[k+1]) {
                    k++;
                }
            } else {
                if (nums[j] * nums[k] > -nums[i]) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }
    return res;
};

// expected [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1,0,1,2,-1,-4]));

// expected []
console.log(threeSum([0,1,1]));

// expected [0,0,0]
console.log(threeSum([0,0,0]));