const func = (input: string) => {
    const split = input.split(" ");
    const scores: number[] = [];
    for (const str of split) {
        const isNum = !isNaN(Number(str));
        if (isNum) {
            scores.push(Number(str));
        } else if (str === "+") {
            const scoreOne = scores[scores.length - 1]!;
            const scoreTwo = scores[scores.length - 2]!;
            scores.push(scoreOne + scoreTwo);
        } else if (str === "D") {
            scores.push(scores[scores.length - 1]! * 2);
        } else if (str === "C") {
            scores.pop();
        }
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum;
};

console.log(func("5 2 C D +"), 30);
console.log(func("5 -2 4 C D 9 + +"), 27);
console.log(func("1 C"), 0);
