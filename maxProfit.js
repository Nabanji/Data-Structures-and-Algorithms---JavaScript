// Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once. Here is what you're given: A list of stock prices for each day [7, 1, 5, 3, 6, 4]. You need to find the difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.

const maxProfit = (arr) => {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentPrice = arr[i];

    // update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
    // console.log(maxProfit);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
