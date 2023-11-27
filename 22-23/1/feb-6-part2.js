const simulateRock = (initialHeight) => {
    for (var i = initialHeight; i > 0; i--) {
        console.log(" ".repeat(i) + "R");
    }
    console.log("_".repeat(initialHeight));
};

simulateRock(4);
