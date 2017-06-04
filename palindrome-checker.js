function isPalindrome(str) {
  var str = str.toLowerCase();
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;
  for (var i = 0; i < mid + 1; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) {
    	return false;
    }

  }
  return true;
}


//Test driver code. These should all log true.
console.log(isPalindrome('p') === true); //false
console.log(isPalindrome('foo') === false); //true
console.log(isPalindrome('racecar') === true); //false
console.log(isPalindrome('Kayak') === true); //false
console.log(isPalindrome('a santa at NASA') === true); //false
console.log(isPalindrome('live without evil') === false); //true
console.log(isPalindrome('just some random words') === false); // true
