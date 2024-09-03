Meeting Today & Challenge #25 (2/14)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #25! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ Mario's Perilous Path (Hard)

This problem is from the UMaryland 2024 High School Programming Contest problem set. This problem is quite hard, so I'd recommend that you work in a team to solve it.

Bowser has once again captured Princess Peach, and this time, he has trapped her within a treacherous labyrinth! Mario must navigate through a maze of obstacles and spikes to reach his beloved Princess. Your programming skills are needed to guide Mario through the shortest path to rescue her.

The labyrinth is provided in the form of a 2-dimensional character array representing its layout. Each cell in the array has a specific meaning:
● 'M': Mario's starting position
● 'P': Princess Peach's location
● 'O': Unobstructed path
● 'S': Spikes (obstacles Mario cannot pass through)

Your method should return the minimum number of steps Mario needs to take to reach Princess Peach, adhering to these rules:
● Mario can only move up, down, left, or right.
● He cannot move through spikes or step outside the grid's boundaries. If there is no path that satisfies the constraint, then your method should return -1.

➡️ Input/Output Format

Input:
The first line in the test data file contains the number of test cases. After that, for each test case, the next line specifies the size of the grid (m n), followed by n lines of m characters each (the characters must be ‘M’, ‘P’, ‘O’, or ‘S’).

Output:
For each test case, the program should output the length of the path for Mario following the rules described above, or, if no path exists, output "BLOCKED".

➡️ Test Cases

Input:

```
3
5 5
MOOOO
OOOOO
OOOOO
OOOOO
OOOOP
5 5
MSOOO
OSOSO
OOOSO
SOSSO
SOOSP
5 5
MSOOO
OSOSO
OSOSO
SOSSO
SOOSP
```

Output:

```
8
12
BLOCKED
```
