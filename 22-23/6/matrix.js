const multiplyMatrices = (a, b) => {
    const rowsA = a.length;
    const rowsB = b.length;
    const colsA = a[0].length;
    const colsB = b[0].length;
    if (colsA != rowsB) {
        console.log({ colsA, colsB, rowsA, rowsB });
        throw new Error("Not multipliable");
    }

    const rows = [];

    for (var rowI = 0; rowI < rowsA; rowI++) {
        const row = [];
        for (var colI = 0; colI < colsB; colI++) {
            let rowSum = 0;
            // TODO: probably need some for loops here
            rowSum += a[rowI][colI] * b[colI][rowI];
            row.push(rowSum);
        }
        rows.push(row);
        console.log("next");
    }

    return result;
};

console.log(
    multiplyMatrices(
        [
            [1, 2],
            [3, 4],
        ],
        [[1], [2]]
    )
);
