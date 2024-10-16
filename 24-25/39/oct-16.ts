const pathExists = (portals: string[][], first: string, last: string) => {
    const portalMap = new Map();
    for (const [start, ...dests] of portals) {
        portalMap.set(start, dests);
    }

    console.log(pathExistsRecursive(first, last, [], portalMap));
};

const pathExistsRecursive = (
    start: string,
    goal: string,
    seen: string[],
    portalMap: Map<string, string[]>
) => {
    const dests = portalMap.get(start);
    if (!dests) return false;
    for (const dest of dests) {
        if (seen.includes(dest)) continue;
        if (dest == goal) return true;
        if (pathExistsRecursive(dest, goal, [...seen, dest], portalMap)) {
            return true;
        }
    }
    return false;
};

pathExists(
    [
        ["a", "b"],
        ["b", "c"],
    ],
    "a",
    "c"
);

pathExists(
    [
        ["a", "b"],
        ["b", "x"],
        ["c", "a"],
    ],
    "a",
    "c"
);

pathExists(
    [
        ["a", "b", "c", "d"],
        ["b", "a"],
        ["c", "a"],
        ["d", "a"],
    ],
    "a",
    "d"
);

pathExists(
    [
        ["a", "b", "c"],
        ["b", "d"],
        ["c", "f"],
        ["d", "b"],
    ],
    "a",
    "f"
);
