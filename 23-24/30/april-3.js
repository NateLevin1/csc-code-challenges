const file = await Bun.file("a.txt").text();
const lines = file.split("\n");
const word = lines[0];
const wordSearch = lines.slice(1);
const height = wordSearch.length;
const width = wordSearch[0].length;

let included = false;

for (var line = 0; line < height; line++) {
    for (var col = 0; col < width; col++) {
        for (var i = 0; i < width - col; i++) {
            if (wordSearch[line][col + i] != word[i]) break;
            if (i == word.length - 1) {
                included = true;
            }
        }
        for (var i = 0; i < height - line; i++) {
            if (wordSearch[line + i][col] != word[i]) break;
            if (i == word.length - 1) {
                included = true;
            }
        }
        for (var i = 0; i < Math.min(width - col, height - line); i++) {
            if (wordSearch[line + i][col + i] != word[i]) break;
            if (i == word.length - 1) {
                included = true;
            }
        }
    }
}

console.log(included ? "Yes" : "No");
