function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
console.log(twoSum([3, 3], 6));

// O(n^2) Quadratic
// O(1)    Constant space complexity



function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const num1 = arr[i];
      const num2 = target - num1; //missing
      if (map.has(num2)) {
        return [i, map.get(num2)];
      }
      map.set(num1, i);
    }
    return null
  }

//   O(n) Linear time complexity
// O(n) Linear space complexity
