function permute(chars: string[], left: number, right: number, arr: string[]) {
    if (left === right) {
        arr.push(chars.join(""));
        return;
    }

    for (let i = left; i <= right; i++) {
        const tmp = chars[i];
        chars[left] = chars[i];
        chars[i] = tmp;
        permute(chars, left + 1, right, arr);
        // TODO: swap back
    }
}

const str = "XY";
const results = [];
permute(str.split(""), 0, str.length - 1, results);
console.log(results);
