/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

const getLongestSubstr = (str) => {
  let splittedStr = str.split("");
  let longestSubsTemp = "";
  let hashmapSubs = {};
  let acummulator = "";

  for (let i = 0; i < splittedStr.length; i++) {
    if (acummulator.includes(splittedStr[i])) {
      hashmapSubs = {
        ...hashmapSubs,
        [acummulator]: acummulator.length,
      };
      if (acummulator.length >= longestSubsTemp.length)
        longestSubsTemp = acummulator;
      acummulator = "" + splittedStr[i];
    } else {
      acummulator += splittedStr[i];
    }
  }

  return `El substring mas largo es: ${longestSubsTemp}, con un total de caracteres de ${hashmapSubs[longestSubsTemp]}`;
};

console.log(getLongestSubstr("abcabcbb"));
console.log(getLongestSubstr("bbbbb"));
console.log(getLongestSubstr("pwwkew"));
