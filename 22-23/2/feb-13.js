const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (sentence) => {
    const lowerSentence = sentence.toLowerCase();
    const seenChars = new Set();

    for (const char of lowerSentence) {
        seenChars.add(char);
    }

    for (const letter of letters) {
        if (!seenChars.has(letter)) {
            return false;
        }
    }

    return true;
};

const isPangramSortMethod = (sentence) => {
    let sorted = sentence.toLowerCase().sort();
    for (var i = 0; i < sorted.length - 1; i++) {
        if (sorted[i].charCodeAt(0) - sorted[i + 1].charCodeAt(0) > 1) {
            return false;
        }
    }
};

// let start = performance.now();
// for (var i = 0; i < 1_000_000; i++) {
//     isPangram("The quick brown fox jumps over the lazy dog.");
// }
// console.log(performance.now() - start);

console.log(isPangram(""), false);
console.log(isPangram("Not a pangram!"), false);
console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
