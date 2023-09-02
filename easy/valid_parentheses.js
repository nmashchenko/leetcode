/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const validParentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (validParentheses[s[i]]) {
      stack.push(s[i]);
    } else {
      if (!stack.length || s[i] !== validParentheses[stack.pop()]) {
        return false;
      }
    }
  }

  return !stack.length;
};
