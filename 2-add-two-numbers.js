/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 https://leetcode.com/problems/add-two-numbers/description/

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


 */

const convertArrToNumber = (arr) => {
  let strNumber = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    strNumber += `${arr[i]}`;
  }
  return Number(strNumber);
};

const convertNumberToArr = (val) => {
  let arr = String(val).split("");
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(Number(arr[i]));
  }
  return result;
};

const getSolution = (arr1, arr2) => {
  const val1 = convertArrToNumber(arr1);
  const val2 = convertArrToNumber(arr2);
  const sum = val1 + val2;
  return convertNumberToArr(sum);
};

console.log(getSolution([2, 4, 3], [5, 6, 4]));
console.log(getSolution([0], [0]));
console.log(getSolution([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
