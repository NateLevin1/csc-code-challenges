function optimalCashDenominations(input: string) {
    const lines = input.split("\n");
    let price = parseInt(lines[0]);

    const denoms = lines.slice(1).map((line) => line.split(" ").map((n) => +n));
    denoms.sort((a, b) => b[0] - a[0]);

    let index = 0;
    let count = 0;
    while (price > 0) {
        if (denoms[index][1] == 0) {
            index++;
        }
        if (index > denoms.length - 1) return -1;

        const [denom] = denoms[index];
        price -= denom;
        count++;
        denoms[index][1]--;
    }

    return count;
}

console.log(
    optimalCashDenominations(`1
1 1`)
);

console.log(
    optimalCashDenominations(`1
1 0`)
);

console.log(
    optimalCashDenominations(`10
1 10
5 2`)
);

console.log(
    optimalCashDenominations(`10
1 10
5 1`)
);

console.log(
    optimalCashDenominations(`100
50 1
20 1
10 1
5 1
1 1
14 1`)
);

console.log(
    optimalCashDenominations(`100
20 4
16 1
10 2
5 1
1 1`)
);
