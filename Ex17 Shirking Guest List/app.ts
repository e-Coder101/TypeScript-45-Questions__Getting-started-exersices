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

//17
console.log(`\nSadly the dinner table would not be delivered in time for the party.\nI can invite only two people now.\n`);

for(let i = (guests.length - 1); i >= 0; i--){
    if (i > 1) {
        console.log(`Salam ${guests[i]}, you are uninvited from the party because of the delayed delivery of my dinner table.`);
    } else {
        i === 1 ? console.log() : i;
        console.log(`Salam ${guests[i]}, you are still invited to the party`)
    }
    guests.pop();
}

console.log(`\n\t Empty array: '${guests}'`);