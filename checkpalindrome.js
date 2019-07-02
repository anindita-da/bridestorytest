function isPalindrome (str){
    var checkPalindrome = ''
    for (var i = str.length-1; i >= 0; i--){
      checkPalindrome += str[i]
    }
    if (checkPalindrome != str){
      return false
    } else {
      return true
    }
  }
  
  //test cases
  console.log(isPalindrome('wow')); // true
  console.log(isPalindrome('lego')); // false
  console.log(isPalindrome('after')); // false
  console.log(isPalindrome('radar')); // true
  console.log(isPalindrome('noon')); // true