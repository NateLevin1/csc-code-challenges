import fs from "node:fs";

const lines = fs.readFileSync(0).toString().split("\n");

const stack = [];
let lastDepth = 0;
for (const line of lines) {
    const name = line.startsWith("-") ? line.split(" ")[1] : line;
    const isDir = line.includes("/");
    const depth = line
        .split(" ")[0]
        .split("")
        .filter((c) => c === "-").length;
    if (isDir) {
        if (depth > lastDepth) {
            stack.push(name);
            lastDepth = depth;
        } else if (depth == lastDepth) {
            stack.pop();
            stack.push(name);
        }
    } else {
        if (name == "waldo.png") {
            break;
        }
    }
}

console.log(stack.join("") + "waldo.png");
