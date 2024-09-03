Meeting Today & Challenge #29 (3/13)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #29! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ Rasterizing Triangles

In computer graphics, a common task is to rasterize an image, converting geometrical shapes into a 2D array of pixels to be rendered on the screen. Imagine we are trying to rasterize randomly selected pixels of an image consisting of a single triangle. In order to do this correctly, we must determine whether each pixel is inside or outside a triangle.

Given the coordinates of the three vertices of a triangle and a list of pixels, your task is to determine whether each pixel is inside or outside the triangle.

➡️ Input
Input consists of a triangle described by three points and coordinate points of the pixels to test.

First line: six coordinates describing the 3 vertices of the triangle. e.g. (x1 y1) (x2 y2) (x3 y3)
Second line: the number of pixels to evaluate (n)
Each subsequent line: a pixel vertex, as a coordinate point (px, py)

Note: Don’t assume that the triangle’s vertices are sorted in any way in the input. You may assume that the x and y of all pixels will be positive.

If the pixel lies on the edge of the triangle, then it _is considered to be inside the triangle_.

➡️ Output
Output is 0 if the pixel is outside of the triangle and 1 if it’s inside

➡️ Sample Input
(1.0 1.0) (2.0 2.0) (3.0 1.0)
2
(2.0 1.5)
(0.5 1.5)

➡️ Sample Output
1
0

➡️ Another Example Input
(2.0 1.0) (3.0 1.0) (4.0 2.0)
4
(2.5 1.5)
(2.5 1.1)
(3.0 2.0)
(3.5 1.5)

➡️ Another Example Output
0
1
0
1

Tip: the final pixel is on the edge of the triangle!

This problem is modified from the VCU 2016 HSPC (problem D). Link: https://egr.vcu.edu/media/engineering/documents/cs/VCU_HSContest_2016_Problems.pdf
