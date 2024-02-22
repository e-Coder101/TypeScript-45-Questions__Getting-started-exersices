# Solution 26 of 45

**Task:** Turn your if-else chain from Exercise 26 into an if-else-if chain.
- If the alien is green, print a message that the player earned 5 points.
- If the alien is yellow, print a message that the player earned 10 points.
- If the alien is red, print a message that the player earned 15 points.
- Write three versions of this program, making sure each message is printed for the appropriate color alien.

**Solution:**
- Copy all TS files from Ex 26, create another TS file *'app3'*.
- Modify the funtion that checks if the value of *alien_color* is **"green"**.
- After else add another if statement that check if the value of *alien_color* is **"yellow"**.
- Repeat this for the value **"red"** as a safety feature so it doesn't run on a random color.
- Log a statement in each if block rewarding the player points according to the instructions.
- Export the function to that it could be used in the *app1*, *app2* and *app3* files.