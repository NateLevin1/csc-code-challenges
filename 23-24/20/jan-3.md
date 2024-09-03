Meeting Today & Challenge #20 (1/3)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #20! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ Finding Waldo.PNG

The input to your program is a file tree structure, where each line represents a file or directory. The number of dashes represents the depth of the file or directory in the tree. The root directory is at depth 0, and each subsequent directory is at depth + 1. See the example input below for the exact format.

Directories are followed by a forward slash, and files will always have a file extension.

Your job is to find the _path to the file named "waldo.txt"_.

➡️ Test Cases

Input:

```
root/
- dir1/
-- file1.txt
-- document.pdf
- dir2/
-- waldo.png
```

Output:

```
root/dir2/waldo.png
```

Input:

```
law/
- people.txt
- government/
-- activity.txt
-- nature.pdf
-- is.png
-- world.jpg
-- media.mp4
-- society/
--- way.txt
--- here.pdf
--- oven.png
--- love.jpg
--- way.mp4
-- software/
--- waldo.png
--- development.txt
--- theory.pdf
--- player.png
--- industry.jpg
-- here/
--- country.txt
--- two.pdf
--- word.png
--- player.jpg
--- software.mp4
-- this/
--- control.txt
--- internet.pdf
--- science.png
--- information.jpg
-- person/
--- here.txt
--- temperature.pdf
--- with.png
--- system.jpg
```

Output:

```
law/government/software/waldo.png
```

Input:

```
map/
- video/
-- method/
--- movie.txt
-- music/
--- nature.txt
--- waldo.png
-- quality/
--- management.txt
--- with.pdf
--- information.png
--- player.jpg
--- software.mp4
-- system.txt
-- system.pdf
-- thanks.png
-- information.jpg
- control/
-- to/
--- information.txt
--- media.pdf
--- country.png
--- variety.jpg
-- this/
--- way.txt
--- oven.pdf
-- you.txt
-- ability.pdf
-- information.png
-- and.jpg
- reading/
-- year/
--- test.txt
--- society.pdf
-- but/
--- movie.txt
--- knowledge.pdf
--- thanks.png
-- this/
--- bird.txt
--- problem.pdf
-- music/
--- people.txt
-- data/
--- power.txt
--- this.pdf
-- power.txt
-- any.pdf
- media.txt
```

Output:

```
map/video/music/waldo.png
```
