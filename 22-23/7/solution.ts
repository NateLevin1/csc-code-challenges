const calculate = (input: string) => {
    const result = 0;
    const lexed = lex(input);
    const parsed = parse(lexed);
    return lexed;
};

const lex = (input: string) => {
    const result: (number | string)[] = [];
    let curNum = "";
    for (var i = 0; i < input.length; i++) {
        const char = input[i];
        if (/\s/.test(char)) continue;
        const isNumber = !isNaN(Number(char));
        if (isNumber) {
            curNum += char;
        } else if (curNum) {
            result.push(Number(curNum));
            curNum = "";
            result.push(char);
        } else {
            result.push(char);
        }
    }
    if (curNum) {
        result.push(Number(curNum));
        curNum = "";
    }
    return result;
};

const parse = (input: (string | number)[]) => {
    return parseExpression(input, 0);
};
const parseNum = (input: (string | number)[], index) => {
    let num = 1;
    if (input[index] === "-") {
        num *= -1;
        index++;
    }
};

console.log(calculate("100 - 10"));
