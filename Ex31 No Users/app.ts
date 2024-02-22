let usernames: string[] = ["Hamza", "Talha", "Admin", "Mustafa", "Saad"];

usernames.forEach(user => {
    if (user === "Admin") {
        console.log(`Hello ${user}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${user}, Welcome to our website.`);
    }
});

usernames = [];

if (usernames.length === 0) {
    console.log(`\n\nTotal users: ${usernames.length}.\nWe need to find some users!`);
}