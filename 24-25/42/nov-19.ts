function bestTimeToSell(str: string) {
    const prices = str.split(",").map((a) => +a);

    let max = 0;

    for (var i = 0; i < prices.length; i++) {
        const price = prices[i];
        for (var j = i; j < prices.length; j++) {
            const otherPrice = prices[j];
            const diff = otherPrice - price;
            if (diff > max) {
                max = diff;
            }
        }
    }

    return max;
}

console.log(bestTimeToSell("7,1,5,3,6,4"));
console.log(bestTimeToSell("7,6,4,3,1"));
console.log(bestTimeToSell("1,2"));
console.log(bestTimeToSell("2,1"));
console.log(bestTimeToSell("2,1,0,8"));
