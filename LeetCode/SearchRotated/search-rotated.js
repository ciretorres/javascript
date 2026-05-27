/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

var search = function(nums, target) {
    let found = nums.find(n => n === target)
    if (found === undefined) {
        return -1;
    } else {
        let index = nums.indexOf(found);
        return index;
    }
};

// expected 4
console.log(search([4,5,6,7,0,1,2], 0));

// expected -1
console.log(search([4,5,6,7,0,1,2], 3));

// expected -1
console.log(search([1], 0));