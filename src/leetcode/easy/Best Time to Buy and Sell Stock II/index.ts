//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
//
//
//
// Example 1:
//
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:
//
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:
//
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e., max profit = 0.
//
//
// Constraints:
//
// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104

// thoughts
// Input: prices = [7,1,5,3,6,4]
// 0 day: 7-7 = 0
// 1 day:

const arePricesInRange = (prices: number[]): boolean => {
  return prices.every(price => price <= Math.pow(10, 4) && price >= 0)
}

const isPricesLengthValid = (prices: number[]): boolean => {
  return prices.length >= 1 &&  prices.length <= 3 * Math.pow(10, 4);
}

const areWithinConstraints = (prices: number[]): boolean  => {
  return arePricesInRange(prices) && isPricesLengthValid(prices);
}

const getStockDifference = (currentStock: number, futureStock: number): number => (futureStock - currentStock) > 0 ? (futureStock - currentStock) : 0;

const getDayForProfitableStart = (prices: number[]): number | undefined => {
  for (let i = 0; prices.length > i; i++) {
    for (let k = i + 1; prices.length - 1 > k; k++) {
      if (prices[i] - prices[k] > 0) {
        return i;
      }
    }
  }
}


export const maxProfit = (prices: number[] = []): number | undefined => {
  if (!areWithinConstraints(prices)) return;

  let profit = 0;

  const startDayForStocking = getDayForProfitableStart(prices);

  if (startDayForStocking) return profit;

  const profitsByDay: number[] = [];

  // const infinitelySetRevenue = (transactions: number[], deepLvl: number = 0): void => {
  //   const transaction = [];
  //
  //   if (!deepLvl) {
  //     for (let i = 0; transactions.length > i; i++) {
  //       for (let k = i + 1; transaction.length > k; k++) {
  //         transaction.push(getStockDifference(transactions[i], transactions[k]));
  //       }
  //     }
  //   } else {
  //
  //   }
  //
  //   profitsByDay.concat(transaction);
  //
  //   infinitelySetRevenue(transaction, deepLvl + 1);
  // }
  //
  // infinitelySetRevenue(prices.splice(startDayForStocking as number))

  return Math.max(...profitsByDay);
}
