const bestPokerHand = (ranks: number[], suits: string[]) => {
    let flush = 0;

    let pairExists = false;
    for (const [rank, suit] of ranks.map((v, i) => [v, suits[i]])) {
        if (suit == suits[0]) {
            flush++;
        }
        let count = 0;
        for (const other of ranks) {
            if (rank == other) count++;
        }
        if (count >= 3) {
            return "Three of a Kind";
        } else if (count >= 2) {
            pairExists = true;
        }
    }

    if (flush == 5) {
        return "Flush";
    } else if (pairExists) {
        return "Pair";
    } else {
        return "High Card";
    }
};

console.log(bestPokerHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]));
console.log(bestPokerHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]));
console.log(bestPokerHand([2, 12, 9, 10, 10], ["a", "b", "c", "a", "d"]));
