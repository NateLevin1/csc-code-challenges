function isLine(str: string) {
    const points = str.split(" ").map((point) => point.split(",").map(Number));

    if (points.length == 2) {
        return true;
    }

    const rise = points[1][1] - points[0][1];
    const run = points[1][0] - points[0][0];

    for (const [x, y] of points.slice(2)) {
        const curRun = x - points[0][0];
        if (run == 0 && curRun != 0) {
            return false;
        }
        let slope = rise / run;
        let curSlope = (y - points[0][1]) / curRun;
        if (slope != curSlope) {
            return false;
        }
    }

    return true;
}

console.log(isLine("1,2 2,3 3,4 4,5 5,6 6,7"), true);
console.log(isLine("1,1 2,2 3,4 4,5 5,6 7,7"), false);
console.log(isLine("1,1 2,2"), true);
console.log(isLine("1,1 2,2 3,3"), true);
console.log(isLine("1,1 1,2 1,3"), true);
