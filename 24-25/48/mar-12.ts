const input =
    "Ymay ewnay Odecay ashay entay haracterscay. Tiay siay aay reatgay asswordpay.";

const decode = (str: string) => {
    const sentences = str.split(".");
    const result: string[][] = [];
    for (let sentence of sentences) {
        sentence = sentence.trim();
        if (!sentence) continue;
        result.push([]);
        const words = sentence.split(" ");
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            const first = word[word.length - 3];
            const isUppercase = word[0].toUpperCase() == word[0];
            const decodedWord =
                (isUppercase ? first.toUpperCase() : first) +
                word.slice(0, word.length - 3).toLowerCase();
            result[result.length - 1].push(decodedWord);
        }
    }

    return result.map((word) => word.join(" ")).join(". ") + ".";
};

console.log(
    decode(input) == "My new Code has ten characters. It is a great password."
);

console.log(decode("Ellohay Atenay Evinlay. Hatway."));
