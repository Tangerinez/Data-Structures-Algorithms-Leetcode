/* 
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

// Solution #1 - Faster
var subtractProductAndSum = n =>
  n
    .toString()
    .split("")
    .reduce((acc, curr) => (acc *= parseInt(curr)), 1) - // initial value of 1
  n
    .toString()
    .split("")
    .reduce((acc, curr) => (acc += parseInt(curr)), 0); // initial value of 0

// Solution #2 - Slower
var subtractProductAndSum = function(n) {
  var arrayNum = n.toString().split("");
  var product = 1;
  var sum = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    product *= parseInt(arrayNum[i]);
    sum += parseInt(arrayNum[i]);
  }
  return product - sum;
};
