const remainder = (a: number, b: number) => {
    let multiplier = 1;
    while ((a & 1) == 0 && (b & 1) == 0 && a > b) {
        a = a >> 1;
        b = b >> 1;
        multiplier++;
    }
    while (a > b) {
        a -= b;
    }
    return a * multiplier;
};

console.log(remainder(5, 2), 1);
console.log(remainder(10, 3), 1);
console.log(remainder(10, 5), 0);
console.log(remainder(10, 7), 3);
console.log(remainder(100, 26), 22);
