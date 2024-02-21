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

//ex16
console.log(`\nI have found a bigger table so I can invite 3 more people.\n`);

guests.splice(0, 0, "Arqam");
guests.splice((Math.ceil(guests.length/2)), 0, "Omer");
guests.splice((guests.length), 0, "Usman");

guests.forEach(guest => {
    console.log(`Salam ${guest}, you are invited to dinner.`);
});

//ex19
console.log(`\n ${guests.length} people are invited to the dinner`);