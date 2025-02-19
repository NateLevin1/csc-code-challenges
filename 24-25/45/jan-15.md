Meeting Today & Challenge #45 (1/15)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #45! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ Baseball Game

You are keeping the scores for a baseball game with unusual rules. At the beginning of the game, you start with an empty record.

You are given a space-separated list of operations, where each operation is one of the following:

-   An integer `x`. -> Record a new score of x.
-   '+'. -> Record a new score that is the sum of the previous two scores.
-   'D'. -> Record a new score that is the double of the previous score.
-   'C'. -> Invalidate the previous score, removing it from the record.

Output the sum of all the scores on the record after applying all the operations.

You may assume that, given the operation "+", there will always be at least two previous scores on the record.
You may also assume that, given the operations "C" or "D", there will always be at least one previous score on the record.

This problem is from LeetCode: https://leetcode.com/problems/baseball-game/description/

➡️ Test Cases

Input: "5 2 C D +"
Output: 30

Input: "5 -2 4 C D 9 + +"
Output: 27

Input: "1 C"
Output: 0

You can view an explanation for each of these test cases on the LeetCode page.
