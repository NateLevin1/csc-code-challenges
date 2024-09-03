Meeting Today & Challenge #35 (5/28)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #35! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

This will be our second to last meeting of the year. Thanks so much to everyone that participated in meetings or HSPCs this year, and here's to another great year of CSC next fall!

Hope to see you there!
Nate Levin

———

💡 ➡️ Calendar Slicing

You are given a list of events, each with a start and end time. Your task is to determine what "slice" the event should be rendered in. Only the minimum number of slices should be used, and each slice should be as full as possible. If two events overlap, they should be in different slices. Event start and end times are exclusive - an event ending at time 2 should not overlap with an event starting at time 2.

Input will be given with each event on a new line, with the start and end times separated by a comma. The output should be an integer, then a slash character, then another integer, representing the slice index (0-indexed) and total number of slices for the event on the corresponding line.

This question is quite difficult. Collaboration is greatly encouraged! A bonus point may be awarded for a solution that has low memory and time complexity.

➡️ Test Cases

Input:

```
1,3
3,5
5,7
```

Visualization:

```
1:1
2:1
3:2
4:2
5:3
6:3
7:
```

Output:

```
0/1
0/1
0/1
```

---

Input:

```
1,4
2,5
3,6
```

Visualization:

```
1:1
2:12
3:123
4:_23
5:__3
```

Output:

```
0/3
1/3
2/3
```

---

Input:

```
1,3
2,5
4,6
```

Visualization:

```
1:1
2:12
3:_2
4:32
5:3
```

Output:

```
0/2
1/2
0/2
```

Input:

```
1,3
2,5
4,7
4,7
```
