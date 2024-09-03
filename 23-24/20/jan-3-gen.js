const wordslist = [
    "example",
    "here",
    "there",
    "you",
    "any",
    "is",
    "some",
    "thing",
    "word",
    "to",
    "test",
    "with",
    "and",
    "or",
    "not",
    "but",
    "this",
    "people",
    "history",
    "way",
    "art",
    "world",
    "information",
    "map",
    "two",
    "family",
    "government",
    "health",
    "system",
    "computer",
    "meat",
    "year",
    "thanks",
    "music",
    "person",
    "reading",
    "method",
    "data",
    "food",
    "understanding",
    "theory",
    "law",
    "bird",
    "literature",
    "problem",
    "software",
    "control",
    "knowledge",
    "power",
    "ability",
    "economics",
    "love",
    "internet",
    "television",
    "science",
    "library",
    "nature",
    "fact",
    "product",
    "idea",
    "temperature",
    "investment",
    "area",
    "society",
    "activity",
    "story",
    "industry",
    "media",
    "thing",
    "oven",
    "community",
    "definition",
    "safety",
    "quality",
    "development",
    "language",
    "management",
    "player",
    "variety",
    "video",
    "week",
    "security",
    "country",
    "exam",
    "movie",
];
const extensions = ["txt", "pdf", "png", "jpg", "mp4"];
const randBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const chooseRandom = (arr) => arr[randBetween(0, arr.length - 1)];

let waldoPath = null;

const maxDepth = 1;
const generateDir = (depth, curPath) => {
    if (depth > maxDepth + 1) return;

    const prefix = "-".repeat(depth) + (depth != 0 ? " " : "");
    const directory = chooseRandom(wordslist) + "/";
    console.log(prefix + directory);

    curPath = curPath + directory;

    const maxDirs = randBetween(1, 5);
    for (let i = 0; i < maxDirs; i++) {
        generateDir(depth + 1, curPath);
    }

    const maxFiles = randBetween(1, 5);
    for (let i = 0; i < maxFiles; i++) {
        console.log(
            "-".repeat(depth + 1) +
                " " +
                chooseRandom(wordslist) +
                "." +
                extensions[i]
        );
    }

    if (depth > maxDepth && !waldoPath && Math.random() < 0.1) {
        console.log("-".repeat(depth + 1) + " waldo.png");
        waldoPath = curPath + "waldo.png";
    }
};

generateDir(0, "");
console.log(waldoPath);
