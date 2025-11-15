function reverseInt(number) {
  // 1. Convert number to string (toString method)
  const numberString = number.toString();
  // 2. Convert string to array (split method)
  const numberArr = numberString.split("");
  // 3. Reverse the array (reverse method)
  const reversedStr = numberArr.reverse();
  // 4. Convert the array back to a string (join method)
  const reversedNumString = reversedStr.join("");
  // 5. Convert the string to number (parseInt)
  const reversedNum = parseInt(reversedNumString);

  return reversedNum;
}

console.log(reverseInt(1234));
