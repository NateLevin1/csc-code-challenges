const hamming = (str1, str2) => {
    const chars1 = str1.split("");
    const chars2 = str2.split("");

    let count = 0;
    for (const index in chars1) {
        if (chars1[index] !== chars2[index]) {
            count++;
        }
    }
    return count;
};

const minHamming = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const dist = hamming(arr[i], arr[j]);
            if (dist < min) {
                min = dist;
            }
        }
    }
    return min;
};

console.log(minHamming(["abc", "abc", "azz"]));
