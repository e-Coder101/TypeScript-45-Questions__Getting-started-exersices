# Solution 32 of 45

**Task:** Do the following to create a program that simulates how websites ensure that everyone has a unique username.
- Make a list of five or more usernames called current_users.
- Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
- Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
-Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

**Solution:**
- Start with two arrays, one with current usernames and one with new usernames.
- Create two for loops, second nested in the first.
- Ittirate the new user and current user arrays using the variables of outer loop and inner loop, respectively.
- Write an if statement in the nested loop to check if the new username is equal to the current username.
- Make them both lowercase, by using the .ToLowerCase() prototype, so that the usernames are case insensitive.
- If the usernames match, print out a message saying the username is taken.
- Create another if statement to check if we have ittirated all of the current user array.
- If the new username doesn't match any of the current usernames then print the message that the username is available.