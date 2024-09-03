Meeting Today & Challenge #32 (4/17)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #32! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ (Maximal) String Compression

Note: I've created two versions of this problem. The first is an easier version, and the second is quite hard. You can choose which one you'd like to solve!

EASY PROBLEM:
Implement a string compression algorithm that takes a string and returns a compressed version of it. The compressed version should be the original string with any repeated characters replaced with the character in parentheses and the number of times it is repeated. Non-repeated characters should not be compressed.

You may assume that the string only contains lowercase letters, with no punctuation or special characters.

HARD PROBLEM:
Implement a string compression algorithm that takes a string and returns a compressed version of it. The compressed version should be the original string with any "maximally repeated substrings" replaced with the substring encased in parentheses and followed by the number of times it is repeated.

A "maximally repeated substring" is defined as a substring that represents the longest possible substring that can repeat, resulting in the smallest output (excluding numbers and parentheses). For example, in the string "hellohellohi", a maximal repeated substring would be "hello". For example, "ll" would not be maximal (even though it is repeated) _because_ you can use "hello" which is better.

You may not nest repeated substrings. You may assume that the string only contains lowercase letters, with no punctuation or special characters.

The length L of string will be within 0 <= L <= 42, which allows solutions with poor time complexities to pass - but please try to find a O(n) solution, if possible!

➡️ Test Cases

EASY PROBLEM TEST CASES:

Input: "aaabbbcccd"
Output: "(a)3(b)3(c)3d"

Input: "abcde"
Output: "abcde"

HARD PROBLEM TEST CASES: (should pass easy test cases as well)

Input: "hellohellohi"
Output: "(hello)2hi"

Input: "Thisisafunnysentencesentencetocompress"
Output: "Th(is)2afu(n)2y(sentence)2tocompre(s)2"

Input: "abcdefghijklmnopqrsabcdefghijklmnopqrs"
Output: "(abcdefghijklmnopqrs)2"

Input: "hhhellohello"
Output: "(h)2(hello)2"
^ Note that this particular example is tricky because "h" is repeated 3 times in the beginning, but 3 "h"s would not be maximal.
