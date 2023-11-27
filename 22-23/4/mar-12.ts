const howManyLettersInCommon = (str: string) => {
    str = str.toLowerCase();
    const words = str.split(" ");

    // fast case
    if (words.length === 1) {
        return str.length;
    }

    const lettersInCommon = new Set<string>();
    const firstWordLetters = words[0].split("");
    for (const letter of firstWordLetters) {
        lettersInCommon.add(letter);
    }

    for (const word of words.slice(1)) {
        const letters = word.split("");
        for (const commonLetter of lettersInCommon) {
            if (!letters.includes(commonLetter)) {
                lettersInCommon.delete(commonLetter);
            }
        }
    }

    return lettersInCommon.size;
};

console.log(howManyLettersInCommon("hello hi"), 1);
console.log(howManyLettersInCommon("january february march"), 2);
console.log(howManyLettersInCommon("january february march april may"), 1);
console.log(howManyLettersInCommon("last"), 4);
console.log(howManyLettersInCommon("funny punny runny"), 3);
