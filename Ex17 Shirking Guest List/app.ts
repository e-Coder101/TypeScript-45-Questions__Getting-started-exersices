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

//ex17
console.log(`\nSadly the dinner table would not be delivered in time for the party.\nI can invite only two people now.\n`);

guests.toReversed().forEach(guest => {
    guests.length === 2 ? console.log() : 0; //this adds an empty line after all uninvites are done.

    if (guests.length > 2) {
        console.log(`Salam ${guest}, you are uninvited from the party because of the delayed delivery of my dinner table.`);
    } else {
        console.log(`Salam ${guest}, you are still invited to the party`)
    }
    guests.pop()
});

console.log(`\n\t Empty array: '${guests}'`);