// Palindrome checker for strings

function palindromeChecker(str) {
  const string = str;
  const stringArray = string.split("");
  const reversedString = stringArray.reverse().join("");
  if (reversedString !== string) {
    return "Is not a palindrome";
  } else {
    return "Is a palindrome";
  }
}

console.log(palindromeChecker("cddc"));
