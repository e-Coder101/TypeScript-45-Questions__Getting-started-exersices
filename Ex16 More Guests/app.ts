let guests: string[] = ["Hamza", "Mustafa", "Talha", "Saad"];

guests.forEach(guest => {
    console.log(`Salam ${guest}, you are invited to dinner.`);
})

console.log(`\nUnfortunately, ${guests[0]} cannot come to the dinner.\n`);
guests[0] = "Asad";

guests.forEach(guest => {
    console.log(`Salam ${guest}, you are invited to dinner.`);
});

console.log(`\nI have found a bigger table so I can invite 3 more people.\n`);

guests.splice(0, 0, "Arqam");
guests.splice(3, 0, "Omer");
guests.splice((guests.length - 1), 0, "Usman");


guests.forEach(guest => {
    console.log(`Salam ${guest}, you are invited to dinner.`);
});