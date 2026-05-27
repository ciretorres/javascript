/**
 * @param {number[]} height
 * @returns {number}
 */
var maxArea = function(height) {
    let max_area = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        max_area = Math.max(max_area, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max_area;
};

// expected 49
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// expected 1
console.log(maxArea([1,1]));