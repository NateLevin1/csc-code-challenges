function solve(a: number, b: number, c: number, x: number) {
    // y = ax^b + cx
    // y' = abx^(b-1) + c
    const result = a * b * Math.pow(x, b - 1) + c;
    return (isNaN(result) ? 0 : result).toFixed(2);
}

console.log(solve(0, 0, 0, 0));
console.log(solve(1, 2, 3, 4));
console.log(solve(1, 1, 1, -1));
