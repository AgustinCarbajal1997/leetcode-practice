/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

hashmap {
    3:0,
    2:1,
    4:2
}

 SOLUTION: 

 The problem requires finding two numbers in an array that sum up to a given target. My first thought was to use a brute force approach, where I would check each pair of numbers to see if they add up to the target. However, this would have a time complexity of O(n^2), which is inefficient for large arrays.

To optimize this, I realized that we can use a hash map to store numbers and their indices as we iterate through the array. By checking if the difference between the target and the current number exists in the map, we can find the solution in a single pass.

Approach
Screenshot 2024-08-23 at 9.35.20 AM.png

Initialize an empty hash map (numToIndexMap) to store the numbers we've seen so far and their corresponding indices.
Iterate over the array using a for loop.
For each number nums[i], calculate the difference diff between the target and the current number (diff = target - nums[i]).
Check if diff exists in numToIndexMap. If it does, it means we've found the two numbers that add up to the target. Return their indices [i, numToIndexMap.get(diff)].
If diff does not exist in the map, store the current number and its index in numToIndexMap.
If no such pair is found by the end of the loop, return null. (Though according to the problem constraints, a solution is guaranteed, so this case won't occur.)

https://leetcode.com/problems/two-sum/solutions/5679696/easiest-detailed-explanation-with-image-and-commented-code/

 */

const getResult = (nums, target) => {
  let hashmap = {};
  let arrResult = [];
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (temp < 0) continue;
    if (hashmap.hasOwnProperty(`${temp}`)) {
      arrResult = [hashmap[String(temp)], i];
    } else {
      hashmap = {
        ...hashmap,
        [nums[i]]: i,
      };
    }
  }
  return arrResult;
};

console.log(getResult([2, 7, 11, 15], 9)); // deberia ser [0,1]
console.log(getResult([3, 2, 4], 6)); // deberia ser [1,2]
console.log(getResult([3, 3], 6)); // deberia ser [0,1]
console.log(getResult([2, 3, 20, 30, 20], 50)); // deberia ser [2,3]
