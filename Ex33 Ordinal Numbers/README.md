# Solution 33 of 45

**Task:** Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
- Store the numbers 1 through 9 in a array.
- Loop through the array.
- Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

**Solution:**
- Create an array of numbers from 1 to 9.
- Create a loop and write a chain of 3 if else statements.
- Then;
    * First check if the number is *1*, if it is then print it with *'st'* at the end.
    * If not, then check if the number is *2*, if it is then print it with *'nd'* at the end.
    * If not, then check if the number is *3*, if it is then print it with *'rd'* at the end.
    * If not, then print it with *'th'* at the end.