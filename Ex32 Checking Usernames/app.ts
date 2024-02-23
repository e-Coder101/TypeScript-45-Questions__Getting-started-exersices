let current_users: string[] = ["Hamza", "Talha", "Abeer", "Mustafa", "Saad"];
let new_users: string[] = ["Jahnzeb", "Harris", "Hamza", "Moiz", "Saad"];

for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            console.log(`The username '${new_users[i]}' is already taken, please choose another username.`);
            break;
        } else if (j === current_users.length-1) {
            console.log(`The username '${new_users[i]}' is available.`);
        }
    }
    
}