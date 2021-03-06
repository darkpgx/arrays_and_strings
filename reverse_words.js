//PROBLEM Write a function that reverses the order of the words in a string.
//Example: "Do or do not," to "not, do or Do"
//Assume that all words are space delimited and treat punctuation the same as letters.

var reverseWords = function (str) {
  var words = str.split(' '); // put string into array delimiting by space
  var reverse_str = '';
  for (var i = words.length -1; i >= 0; i--) {
    if (i !== 0) {
      reverse_str = reverse_str + words[i] + ' ';
    }
    else {reverse_str = reverse_str + words[i]}; //last word will not have space at the end
  };

  return reverse_str;
};

console.log (reverseWords('Do or do not,'));
