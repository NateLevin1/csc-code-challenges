const mix2 = (strs: string[]) => {
    let result = "";
    for (let i = 0; strs.some((str) => i < str.length); i++) {
        for (const str of strs) {
            if (i < str.length) {
                result += str[i];
            }
        }
    }
    return result;
};

console.log(mix2(["A", "B"]), "AB");
console.log(mix2(["ABCD", "YZ"]), "AYBZCD");
console.log(mix2(["ABCDEFGHIJKL", "ZYXWV"]), "AZBYCXDWEVFGHIJKL");
console.log(mix2(["ZYXWV", "ABCDEFGHIJKL"]), "ZAYBXCWDVEFGHIJKL");
