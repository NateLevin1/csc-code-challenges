import fs from "node:fs";

const input = fs
    .readFileSync(0)
    .toString()
    .split("\n")
    .map((line) => line.split(""));

const rows = input.length;
const cols = input[0].length;

const output = new Array(rows).fill(null).map((_) => new Array(cols).fill(0));

const visited = new Set();
const searchNext = [{ x: 0, y: 0, val: 0 }];

while (searchNext.length > 0) {
    const { x, y, val } = searchNext.shift();
    if (visited.has(x + "," + y)) {
        continue;
    }
    visited.add(x + "," + y);

    const char = input[y][x];
    if (char !== "S") {
        output[y][x] = val;
    } else {
        continue;
    }

    // up
    if (y > 0) {
        searchNext.push({ x, y: y - 1, val: val + 1 });
    }
    // down
    if (y < cols - 1) {
        searchNext.push({ x, y: y + 1, val: val + 1 });
    }
    // left
    if (x > 0) {
        searchNext.push({ x: x - 1, y, val: val + 1 });
    }
    // right
    if (x < rows - 1) {
        searchNext.push({ x: x + 1, y, val: val + 1 });
    }
}

console.log(output.at(-1).at(-1) || "BLOCKED");
