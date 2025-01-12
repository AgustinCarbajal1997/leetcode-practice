/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

const findMedianSortedArrays = (nums1, nums2) => {
  const combined = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = combined.length;

  if (n % 2 === 1) {
    // impar
    return combined[Math.floor(n / 2)];
  } else {
    // par
    return (combined[n / 2 - 1] + combined[n / 2]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2, 4, 5, 6, 7]));
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6]));
