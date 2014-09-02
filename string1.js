//PROBLEM Write an efficient function to find the first nonrepeated character in a string.
//For instance, the first nonrepeated character in "total" is 'o' and
//the first nonrepeated character in "teeter" is 'r'.
//Discuss the efficiency of your algorithm.

var uniqueString = function (testString) {
  var mark;
  var charCheck = {};
  for (var i = 0; i < testString.length-1; i++){
    if (testString.charAt(i) in charCheck) {
      null;
    }
    else {
      mark = 0;
      for (var j = i+1; j < testString.length; j++) {
        if (testString.charAt(i) == testString.charAt(j)){
          mark = 1;
          charCheck[testString.charAt(i)] = '';
          j = testString.length;
          console.log(charCheck);
        };
      };
      if (mark == 0) {return testString.charAt(i);};
    };
  };
  if (!(testString.charAt(testString.length -1) in charCheck)) {return testString.charAt(testString.length -1);};
  return "Such character does not exist";
};

console.log(uniqueString("ttal"));
console.log(uniqueString("toto"));
console.log(uniqueString("teeter"));
