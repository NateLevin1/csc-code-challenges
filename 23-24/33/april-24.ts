function F(x0: number, y0: number, v: number, w: number) {
    const t = -x0 / v;
    const y = Math.abs(w * t - 5 * t * t + y0);
    if (y <= 1) return 5;
    if (y <= 2) return 3;
    if (y <= 3) return 1;
    return 0;
}

function G(size: number) {
    if (size === 1) return 1;
    return size + size * 5 * G(Math.floor(size / 2));
}

console.log(G(1));
console.log(G(2));
console.log(G(3));
console.log(G(4));

console.log("————");

console.log(F(-10, 0, 10, 5));
console.log(F(-10, 0, 9, 4));
