let username: string[] = ["Hamza", "Talha", "Admin", "Mustafa", "Saad"];

username.forEach(user => {
    if (user === "Admin") {
        console.log(`Hello ${user}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${user}, Welcome to our website.`);
    }
});