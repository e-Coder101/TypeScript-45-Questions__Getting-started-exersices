# Solution 40 of 45

**Task:** Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

**Solution:**
- Create a type object *'Album'* and give it the properties *'artistName'*, *'albumTitle'* and *'numOfTracks'* (optional).
- Create a function with two string parameters *'name'* & *'title'* and an optional number parameter *'tracks'*. Store these arguments in the properties of the *'Album'* object type.
- Call the function and make atleast four different album objects with atleast one with a value for the optional parameter.
- Print each object using JSON.stringfy().