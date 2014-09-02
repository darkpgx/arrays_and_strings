//PROBLEM Write a function that reverses the order of the words in a string.
//Example: "Do or do not," to "not, do or Do"
//Assume that all words are space delimited and treat punctuation the same as letters.

var reverseWords = function (str) {
  var words = [];
  var temp = '';
  var temp2 = '';
  for (var i = 0; i < str.length; i++) {
    if(str.charAt(i) !== ' ') {
      temp = temp + str.charAt(i);
    }
    else {
      words.push(temp);
      temp ='';
    };
  };
  if (temp !== '') {words.push(temp);}; //for the last word that has not been added to array
  for (var i = words.length -1; i >= 0; i--) {
    if (i !== 0) {
      temp2 = temp2 + words[i] + ' ';
    }
    else {temp2 = temp2 + words[i]}; //last word will not have space at the end
  };

  return temp2;
};

console.log (reverseWords('Do or do not,'));
