function validParentheses(str: string) {
    let stack: string[] = [];
    for (const char of str) {
        if (char == "(" || char == "[") {
            stack.push(char);
        } else if (char == ")" || char == "]") {
            const last = stack.pop();
            if (char == ")") {
                if (last != "(") {
                    return false;
                }
            } else if (char == "]") {
                if (last != "[") {
                    return false;
                }
            }
        } else {
            throw new Error("Invalid character: " + char);
        }
    }
    return true;
}

const check = (val: string, res: boolean) => {
    if (validParentheses(val) != res) {
        throw new Error(
            `Expected ${res} but got ${validParentheses(val)}: ${val}`
        );
    }
};

check("", true);
check("()", true);
check("()[]", true);
check("([)]", false);
check("[(([]))]", true);
