function keywords(input: string) {
    const [keywordsStr, sentence] = input.split("\n");
    const keywords = keywordsStr.split(",");
    for (const keyword of keywords) {
        if (!sentence.includes(keyword)) {
            return false;
        }
    }
    return true;
}

console.log(
    keywords(`first,second,third
first second third`)
);
console.log(
    keywords(`c,b,a
abc`)
);
console.log(
    keywords(`apple,banana,orange
i enjoy apples bananas and oranges`)
);
console.log(
    keywords(`not,found
empty sentence`)
);
console.log(
    keywords(`red,green,blue
my favorite colors are red and blue`)
);
console.log(
    keywords(`john,johnathan
johnathan`)
);
