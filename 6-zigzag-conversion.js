/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

*/

const convert = (s, numRows) => {
  if (!s || s?.length < 1) return null;

  let tempRow = 1;
  let tempRowDirection = "asc";
  let zigzagArr = [];

  let modifyZigzagArr = (tempRow, i) => {
    zigzagArr[tempRow - 1] = zigzagArr[tempRow - 1]
      ? zigzagArr[tempRow - 1] + s[i]
      : s[i];
  };

  for (let i = 0; i < s.length; i++) {
    if (tempRowDirection === "asc") {
      if (tempRow < numRows) {
        modifyZigzagArr(tempRow, i);
        tempRow += 1;
        tempRowDirection = "asc";
      } else {
        modifyZigzagArr(tempRow, i);
        tempRow -= 1;
        tempRowDirection = "dsc";
      }
    } else {
      if (tempRow > 1) {
        modifyZigzagArr(tempRow, i);
        tempRow -= 1;
        tempRowDirection = "dsc";
      } else {
        modifyZigzagArr(tempRow, i);
        tempRow += 1;
        tempRowDirection = "asc";
      }
    }
  }
  console.log(zigzagArr.join(""));
  return zigzagArr.join("");
};

convert("PAYPALISHIRING", 3);
convert("PAYPALISHIRING", 4);
convert("A", 1);
