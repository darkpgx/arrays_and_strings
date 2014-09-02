//improvement for remove_chars.js by using the actual string itself and indexOf instead of lookup table

var remove_chars = function(str, remove) {
  var temp = ''; //temporary string to add only the necessary chars when going through the loop once
  for(var i = 0; i < str.length; i++) {
    if (remove.indexOf(str.charAt(i)) == -1) {
      temp = temp + str.charAt(i);
    };
  };
  return temp;
};

console.log(remove_chars('hello', 'eo'));
console.log(remove_chars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
