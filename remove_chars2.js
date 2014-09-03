//improvement for remove_chars.js by using the actual string itself and indexOf instead of lookup table
//using regular expressions to simplify the function

var remove_chars = function(str, remove) {
  var pattern = new RegExp ("[" + remove + "]","g");
  return str.replace(pattern, '');
};

console.log(remove_chars('hello', 'eo'));
console.log(remove_chars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
