//ex14
let guests: string[] = ["Hamza", "Mustafa", "Talha", "Saad"];

guests.forEach(guest => {
    console.log(`Salam ${guest}, you are invited to dinner.`);
})

//ex15
console.log(`\nUnfortunately, ${guests[0]} cannot come to the dinner.\n`);
guests[0] = "Asad";

guests.forEach(guest => {
    console.log(`Salam ${guest}, you are invited to dinner.`);
});