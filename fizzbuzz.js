//1. Print numbers from 1 to n
//2. If number is divisible by 3, print "Fuzz"
//3. If number is divisible by 5, print "Buzz"
//4. If number is divisible y 3 and 5, print "FizzBuzz"
//5. Else, print the number

const fizzBuzz = (n) => {
  while (n >= 1) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
    } else if (n % 3 === 0) {
      console.log("Fizz");
    } else if (n % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(n);
    }
    n--;
  }
};

fizzBuzz(15);

// if (n % 3 === 0 && n % 5 === 0) {
//       return "FizzBuzz";
//     } else if (n % 3 === 0) {
//       return "Fizz";
//     } else if (n % 5 === 0) {
//       return "Buzz";
//     } else {
//       return n;
//     }
//     n--;
