// Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers are at in the list

const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum([2, 11, 7, 15], 9));
// console.log(twoSum([], 0));
