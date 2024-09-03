function findBestCompression(str: string[]) {
    for (let maxLen = Math.floor(str.length / 2); maxLen > 0; maxLen--) {
        for (let offset = 0; offset < str.length - maxLen; offset++) {
            let count = 1;
            loop: while (true) {
                for (let i = 0; i < maxLen; i++) {
                    if (
                        str[offset + i] !== str[offset + i + maxLen * count] ||
                        str[offset + i].length > 1 ||
                        str[offset + i + maxLen * count].length > 1
                    ) {
                        break loop;
                    }
                }
                count++;
            }
            if (count != 1) {
                return [offset, maxLen, count];
            }
        }
    }
    return null;
}
function compress(str: string) {
    let arr = str.split("");
    while (true) {
        let result = findBestCompression(arr);
        if (result == null) {
            break;
        }
        let [offset, maxLen, count] = result;

        // TODO
        do {
            findBestCompression(arr.slice(offset, offset + maxLen))
        } while(...);
        
        arr.splice(
            offset,
            maxLen * count,
            `(${arr.slice(offset, offset + maxLen).join("")})${count}`
        );
    }
    return arr.join("");
}

// let text = await Bun.file("a.txt").text();
let startTime = new Date();
console.log("Started at " + startTime.getTime());
// console.log(compress(text));
console.log(compress("hihihihi"));
console.log("Took: " + (new Date().getTime() - startTime.getTime()) + "ms");
