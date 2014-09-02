//improved version of string1.js
//runtime significantly reduced to O(n)

var uniqueString = function (testString) {
  var charCheck = {};
  for (var i = 0; i < testString.length; i ++) {
    if (!(testString.charAt(i) in charCheck)) {
      charCheck[testString.charAt(i)] = 1;
    }
    else {
      charCheck[testString.charAt(i)] ++;
    };
  };
  console.log(charCheck);
  for (var i = 0; i < testString.length; i ++) {
    console.log(charCheck[testString.charAt(i)]);
    if(charCheck[testString.charAt(i)] ===1) {
      return testString.charAt(i);
    }
  };
  return "All characters appear more than once";
};

console.log (uniqueString('total'));
console.log (uniqueString('teeter'));
console.log (uniqueString('toto'));
