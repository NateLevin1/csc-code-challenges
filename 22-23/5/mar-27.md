💡 ➡️ Simple Computer

For this challenge, you'll need to implement a simple computer that can input and output things.
Each command given to the computer will be put on a separate line in your program's input.

The computer has one internal value that can be modified by the `plus` and `minus` commands.
The `plus` command adds one, the `minus` command subtracts one, and the `output` command outputs the current value.

The only other command is `back {number}`. To execute this command, your computer should go back the number of lines indicated, and then _should not go back_ once it gets to the command again. You may assume that the number will always be a line that exists.

Here is an illustrated example. The following commands:
plus
plus
plus
output
back 2

would execute the following operations:

internal = 1
internal = 2
internal = 3
output(internal)
internal = 4
output(internal)

which would result in the final output of:
3
4

➡️ Test Cases

Input: "
plus
back 1
back 2
output
"
Output: "3"

Input: "
plus
plus
plus
minus
minus
minus
back 6
output
back 1
"
Output: "
0
0
"
