// Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size.

// SOLUTION
//1. create an empty array to hold the chunks
//2. set a starting index to keep track of where we are in the original array.
//3. Loop through the original array as long as the index hasn't reached the end
//4. Extract a chunk of the desired size from the original array
//5. Add the extracted chunk to the "chunked array"
//6. Move the index forward by the chunk size to get to the next chunk
//7. Retrun the final array of chunks

const arrayChunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    console.log(chunk);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
