const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const input = `4
2
et tu brute
5
carpe diem
18
ex nihilo nihil fit
100
audere est facere`;

const [_numOfTests, ...lines] = input.split("\n");

for (var i = 0; i < lines.length; i += 2) {
    const shift = parseInt(lines[i]);
    const text = lines[i + 1];
    const shiftedText = text
        .split("")
        .map((letter) =>
            letter == " "
                ? " "
                : letters[(letters.indexOf(letter) + shift) % 26]
        )
        .join("");
    console.log(shiftedText);
}
