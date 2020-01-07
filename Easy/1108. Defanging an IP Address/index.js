/* 
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

// Solution #1 - Faster
var defangIPaddr = function(address) {
  return address.replace(/[.]/g, "[.]");
};

// Solution #2 - Slower
var defangIPaddr = function(address) {
  let stringAddress = address.split("");
  for (var i = 0; i < stringAddress.length; i++) {
    if (stringAddress[i] === ".") {
      stringAddress.splice(i, 1, "[.]");
    }
  }
  return stringAddress.join("");
};
