// @ts-ignore -- bun api
const input = await Bun.file("./commands.txt").text();
const lines = input.split("\n");
let value = 0;
for (var line = 0; line < lines.length; line++) {
    const [command, arg] = lines[line].split(" ");
    switch (command) {
        case "plus":
            value++;
            break;
        case "minus":
            value--;
            break;
        case "output":
            console.log(value);
            break;
        case "back":
            lines[line] = "";
            line = line - Number(arg) - 1;
            break;
    }
}
