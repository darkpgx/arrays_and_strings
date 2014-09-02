//PROBLEM Write an efficient function that deletes characters from an ASCII string.
//Use removeChars(str, remove);
//where any character existing in remove must be deleted from str. 
//The runtime is O(n) since each for look does about n operation and I'm running 3 for loops, so around 3n 

var removeChars = function(str, remove) {
  var remove_obj = {};
  var str_obj = {};
  var temp = '';
  for (i = 0; i < remove.length; i++) {
    remove_obj[remove.charAt(i)] = '';
  };
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) in remove_obj) {
      str_obj[i] = [str.charAt(i), 0];
    }
    else {
      str_obj[i] = [str.charAt(i), 1];
    };
  };
  for (i = 0; i < str.length; i++) {
    if (str_obj[i][1] == 1) {
      temp = temp + str_obj[i][0];
    };
  };
  return temp;
};

console.log(removeChars('hello', 'eo'));
console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
