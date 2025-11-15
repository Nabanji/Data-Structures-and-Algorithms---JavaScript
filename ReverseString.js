// Steps to reversing a string

// 1. Convert the string into an array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert the reversed array back to a string

const reverseString = (str) => {
  // convert the string into an array
  const strArray = str.split("");

  // reverse the array
  const reversedArr = strArray.reverse();

  // Convert the reversed array back to a string
  const reversedString = reversedArr.join("");

  // return the reversed string
  return reversedString;
};

console.log(reverseString("hello"));
console.log(reverseString("prince"));
