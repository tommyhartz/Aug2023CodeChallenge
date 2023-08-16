// https://stackoverflow.com/a/53134889/2360569
// O(n)

function maximizeProfit(prices) {

    let bestProfit = 0;
    let lowestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > lowestPrice && bestProfit < prices[i] - lowestPrice) {
            bestProfit = prices[i] - lowestPrice;
        }

        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        }
    }
    return bestProfit;
}