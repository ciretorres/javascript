/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    res = Math.max.apply(Math, nums);
    cur_max = 1;
    cur_min = 1;

    nums.forEach(n => {
        let temp = cur_max * n;
        cur_max = Math.max(temp, cur_min * n, n);
        cur_min = Math.min(temp, cur_min * n, n);

        res = Math.max(res, cur_max);
    });
    return res;
};

// expected 6
console.log(maxProduct([2,3,-2,4]));

// expected 0
console.log(maxProduct([-2,0,-1]));