/**
 *
 * Input: "alex aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.

Input: name = "saeed ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.

Input: name = "saeed saeed"
Output: true

Input: name = "saeed saeeeeeeeeeeeeeeeeeeeeed"
Output: true
 */

function isLongPressedName(input: string) {
    // TODO: not a full correct solution
    let [name, typed] = input.split(" ");
    let lastChar = "";
    let index = 0;

    for (const char of name) {
        while (typed[index] == lastChar) {
            index++;
        }
        if (typed[index] == char) {
            index++;
        }
        lastChar = char;
    }

    return index == typed.length;
}

// test cases
console.log(isLongPressedName("alex aaleexa")); // false
console.log(isLongPressedName("alex aaleex")); // true
console.log(isLongPressedName("saeed ssaaedd")); // false
console.log(isLongPressedName("saeed saeed")); // true
console.log(isLongPressedName("saeed saeeeeeeeeeeeeeeeeeeeeed")); // true
console.log(isLongPressedName("leelee lleeelee")); // true
