Meeting Today & Challenge #28 (3/6)

——————————————————————————————————————————————————————————————————————————————————————

Hello Computer Science Club members,

⭐️ We have a meeting today in room 274 during patriot period.
Make sure to go if you can!

Today we have Code Challenge #28! The challenge is below in this email if you'd like to try it but can't come to the meeting. Please email me your solution if you do!

Hope to see you there!
Nate Levin

———

💡 ➡️ Timer

Implement the following functions to create a Timer class, that waits for some milliseconds and then runs a callback:

-   `start` - starts the timer
-   `end` - stops/cancels the timer
-   `pause` - pauses the timer
-   `resume` - resumes the timer
-   `getTimeRemaining` - returns the time remaining in milliseconds

➡️ Test Cases

You'll have to edit the test cases depending on the language you're using. The following examples are written in pseudocode.

——————
Example 1:

timer = new Timer(500, printHelloWorld)
timer.start()
assert(timer.getTimeRemaining() == 500)
timer.end()
assert(timer.getTimeRemaining() == 0)
// nothing should be printed

——————
Example 2:

timer = new Timer(500, printHelloWorld)
timer.start()
timer.pause()
assert(timer.getTimeRemaining() == 500)
wait(100)
timer.resume()
assert(timer.getTimeRemaining() == 400)
wait(400)
assert(timer.getTimeRemaining() == 0)
// hello world should be printed
