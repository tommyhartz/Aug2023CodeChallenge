// O(n^2)

function maximizeProfit(prices) {
    let bestProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        let potentialProfit = computeMaxProfitGivenPurchaseIndex(i, prices);

        if (potentialProfit > bestProfit) {
            bestProfit = potentialProfit;
        }
    }
    return bestProfit;
}

function computeMaxProfitGivenPurchaseIndex(buyIndex, prices) {
    let bestProfit = 0;

    for(let i = buyIndex + 1; i < prices.length; i++) {

        if (prices[i] > prices[buyIndex]) {

            let potentialProfit = prices[i] - prices[buyIndex];

            if (potentialProfit > bestProfit) {
                bestProfit = potentialProfit;
            }
        }
    }

    return bestProfit;
}