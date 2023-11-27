const input = `14
25 24
4 3 1 2
13 9 4 11
10 20 8 7
32 10 21
23 13 19 32 22
19 12 5 14 17 30
14 6 15 16
30 18 31 29
24 23 26
26 27 28`;

let lines = input.split("\n");

let root = lines.shift()!;

let obj: { [key: string]: string[] } = {};

for (const line of lines) {
    const nums = line.split(" ");
    const node = nums.shift()!;
    obj[node] = nums;
}

function findAncestorOf(node: string) {
    for (const key in obj) {
        if (obj[key].includes(node)) {
            console.log(key);
            findAncestorOf(key);
        }
    }
}

console.log(root);
findAncestorOf(root);
