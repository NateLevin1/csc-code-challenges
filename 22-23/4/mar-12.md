💡 ➡️ How many letters in common?

You will need to write a function that takes a string of words, separated by spaces, and determines how many letters in common each word has with the others. Capitalization and punctuation can be ignored. Please see the test cases below for some examples of what your program should output.

For example, if given the string "hello hi", the result should be 1, as "h" is the only letter in common between the two words. The letter's position in the string also does not matter: "apple rad" should also give 1, even though "a" appears in different places in the words.

For a bonus challenge, try writing a solution that solves this problem with a time complexity better than O(n^2). You can learn more about time complexity by watching this short Fireship video: https://www.youtube.com/watch?v=g2o22C3CRfU

➡️ Test Cases

Input: "january february march"
Output: 2 (a and r)

Input: "last"
Output: 4 (l, a, s, and t are seen in all words)

Input: "funny punny runny"
Output: 3 (u, n, and y)
