const [n, k] = prompt().split(" ").map(Number);
const arr = new Array(n).fill(null).map((_, i) => i + 1);
let index = k;

while (arr.length > 1) {
    arr.splice(index, 1);
    index += k - 1;
    index = index % arr.length;
}

console.log(arr[0]);
