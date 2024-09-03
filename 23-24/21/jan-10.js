import fs from "node:fs";

const lines = fs.readFileSync(0).toString().split("\n");
let x = 0;
let y = -1; // the dashes
let id = 0;

const toppings = [];

for (const line of lines) {
    x = 0;
    for (const char of line.split("")) {
        if (char == "o") {
            toppings.push({ x, y, id: ++id });
        }
        if (char === " " || char === "o") {
            x++;
        }
    }
    y++;
}

const dist = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

let minDistance = Number.MAX_SAFE_INTEGER;

for (const topping of toppings) {
    for (const otherTopping of toppings) {
        if (topping.id == otherTopping.id) continue;
        const curDist = dist(topping, otherTopping);
        if (curDist < minDistance) {
            minDistance = curDist;
        }
    }
}

if (toppings.length <= 1) {
    minDistance = 0;
}

console.log(minDistance.toFixed(3));
