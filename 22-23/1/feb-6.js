const simulateRock = (initialHeight) => {
    for (var i = 0; i < initialHeight; i++) {
        console.log(" ".repeat(i) + "R");
    }
    console.log("_".repeat(initialHeight));
};

simulateRock(4);
