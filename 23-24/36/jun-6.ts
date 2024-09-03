const donut = (radius: number) => {
    const width = radius * 2;
    const arr = new Array(width)
        .fill(null)
        .map((a) => new Array(width).fill(" "));

    for (var col = 0; col < width; col++) {
        for (var row = 0; row < width; row++) {
            if (
                Math.pow(col - radius, 2) + Math.pow(row - radius, 2) ==
                radius
            ) {
                arr[col][row] = "X";
            } else {
                arr[col][row] = " ";
            }
        }
    }

    return arr.map((a) => a.join("")).join("\n");
};

console.log(donut(10) + "\n");
