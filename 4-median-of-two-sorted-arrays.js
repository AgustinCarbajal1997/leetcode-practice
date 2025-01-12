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

//console.log(findMedianSortedArrays([1, 3], [2, 4, 5, 6, 7]));
//console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6]));

//CON BUSQUEDA BINARIA
function findMedianSortedArraysBinary(nums1, nums2) {
  // Asegurarnos de que nums1 sea el arreglo más pequeño
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;
    console.log("partition1", partition1, "partition2", partition2);

    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];

    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      console.log(maxLeft1, minRight2, maxLeft2, minRight1);
      // Encontramos la partición correcta
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      // Mover hacia la izquierda
      right = partition1 - 1;
    } else {
      // Mover hacia la derecha
      left = partition1 + 1;
    }
  }

  throw new Error("Input arrays are not sorted or invalid.");
}

console.log(findMedianSortedArraysBinary([1, 2, 3], [4, 5, 6, 7]));
//console.log(findMedianSortedArraysBinary([1, 2, 3], [4, 5, 6]));

function linearSearch(value, list) {
  let found = false;
  let position = -1;
  let index = 0;
  while (!found && index < list.length) {
    if (list[index] == value) {
      found = true;
      position = index;
    } else {
      index += 1;
    }
  }
  return position;
}

//console.log(linearSearch(5, [4, 5, 6, 7]));

function binarySearch(value, list) {
  let first = 0; //left endpoint
  let last = list.length - 1; //right endpoint
  let position = -1;
  let found = false;
  let middle;
  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    console.log("middle", middle);
    if (list[middle] == value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      //if in lower half
      last = middle - 1;
    } else {
      //in in upper half
      first = middle + 1;
    }
  }
  return position;
}

//console.log(binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
