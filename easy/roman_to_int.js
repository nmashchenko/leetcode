/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = values[s[i]];
    let next = values[s[i + 1]];

    if (curr < next) total -= curr;
    else total += curr;
  }

  return total;
};
