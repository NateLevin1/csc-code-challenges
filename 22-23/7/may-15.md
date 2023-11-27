Last Meeting of the Year! Donuts & Challenge #7 (5/15)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We will have our _last meeting of the year_ TODAY in room 274 during patriot period!
🍩 To celebrate this occasion, there will be DONUTS for those that attend!

Today we also have Code Challenge #7. The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin & Cambyses Khani

———

💡 ➡️ Build A Calculator (4 Levels)

This challenge is organized into 4 levels. For each level you complete, you will earn an additional point on the leaderboard. You'll likely have to modify your code from the previous level in order to solve the next level.

Creative solutions are encouraged, though for this challenge you may not use built-in math execution functions.
For the first 3 levels, you may assume that all input is valid.

➡️ 1️⃣ Level 1: Addition & Subtraction

Your program must take an input consisting of valid addition and subtraction operations, and return the result of that calculation. Spaces should be ignored by your program.

— Test Cases: —
input: "1+1", output: 2
input: "1 + 1", output: 2
input: "1+2+3", output: 6
input: "1-6", output: -5

➡️ 2️⃣ Level 2: Multiplication & Order of Operations

Multiplication might complicate your logic, because you'll have to handle the order of operations. Good luck!

— Test Cases: —
input: "1*0", output: 0
input: "2*3+1", output: 7
input: "3+1*8", output: 11 (not 32!)

➡️ 3️⃣ Level 3: Parentheses

Now, you'll need to handle parentheses. Parentheses will modify the order of operations.
You do NOT have to follow the automatic multiplication of parentheses. For example, you do not have to handle input like "(2)(2)"

— Test Cases: —
input: "(1+1)", output: 2
input: "(1)+(1)", output: 2
input: "(3+1)*8", output: 32 (not 11!)

➡️ 4️⃣ Level 4: Negative Numbers

To make a negative number, we will use the same character as is used for subtraction: "-".
Remember that a double negative will result in a positive!

Hint: While addition, subtraction, and multiplication are BINARY operations, negation is a UNARY operation.
Learn more on Wikipedia: https://en.wikipedia.org/wiki/Unary_operation

— Test Cases: —
input: "-1", output: -1
input: "1+-1", output: 0
input: "1--1", output: 2
input: "1-(-(-1))", output: 0
input: "(-5 + 2) * -1", output: 3

➡️ ✨ BONUS! Validation

When programming, we often want to find out if an input is valid or not. For example, if we were to embed this calculator onto a website, it would be useful to tell the user if they've made a typo.

To earn the bonus point, your program should complete all above levels and detect and report syntax errors if present.

— Test Cases: —
input: "1+1", output: 2
input: "1++1", output: "Error" (or, for bonus points: "Invalid operation")
input: "(1+1", output: "Error" (or, for bonus points: "Unclosed parentheses")
input: ")1+1", output: "Error" (or, for bonus points: "Unexpected closing parentheses")