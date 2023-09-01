/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // sort the array because its rearrange alphabetical order
  strs.sort();

  /** On that point we are sure that all prefixes will start the same so we just compare first and last elements */
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substring(0, i);
    }
  }

  return strs[0];
};
