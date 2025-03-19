# Code Challenge: Tiny Golf

You are playing Tiny Golf! The ball can move up, down, left, or right, and the ball will continue in that direction until it runs into a wall or falls into the hole. After running into a wall, the ball will stop and be able to move in another direction again.

Your goal is that, given a "tiny golf" board, composed of walls (X), empty spaces (_), the ball's starting point (O , not a zero), and the hole/goal (4, it's a flag in case you were wondering), you must print the minimum amount of moves to get the ball into the hole.

FOR DOUBLE POINTS: Print a specific sequence of moves (e.g. left right up) that gets the ball INTO the hole.

## Example input:
*O represents the starting point, and 4 represents the hole. An underscore represents empty space.*

```ignorelang
8
XXXXXX
X____X
X_XX_X
X_XX_X
X_XX_X
X_XX_X
XOXX4X
XXXXXX
```

## Example output

3

**OR**

up right down

## Example input 2:
```
10
XXXX_____
XX_XXXXXX
X_______X
X__XXXX_X
X_____X_X
XX_X4_X_X
_X_X__X_X
_X_XXXX_X
_X_____OX
_XXXXXXXX
```

## Example output 2:
7

*OR*

up left down right down left up