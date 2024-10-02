Meeting Today & Challenge #38 (10/2)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #38! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ Mix 2 Decks

Create a program that takes two strings as input, each representing a stack of "cards". Return a single string that represents the two stacks "mixed" together.

The order should become: the first card in stack 1, the first card in stack 2, the second card in stack 1, then the second card in stack 2, until one of the decks runs out. If one deck is longer than the other, the remaining cards should be added to the end of the output string.

Your input will be two lines, representing each deck. Line 1 contains the number of cards, followed by a space, followed by the deck where each card is represented by a lowercase letter. The second line is the same as the first but for the second deck.

➡️ Test Cases

Input:

```
1 A
1 B
```

Output: AB

---

Input:

```
4 ABCD
2 YZ
```

Output: AYBZCD

---

Input:

```
12 ABCDEFGHIJKL
5 ZYXWV
```

Output: AZBYCXDWEVFGHIJKL

---

Input:

```
5 ZYXWV
12 ABCDEFGHIJKL
```

Output: ZAYBXCWDVEFGHIJKL
