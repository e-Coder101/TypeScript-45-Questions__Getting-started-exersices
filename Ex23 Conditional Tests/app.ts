let food: string = "biryani";
let num: number = 7;
let bool: boolean = false;

console.log(`Is food == "biryani"? I predict true.\t` + (food === "biryani"));
console.log(`Is food == "karhai? I predict false.\t` + (food == "Karhai"))
console.log(`Is food == "BIRYANI"? I predict false.\t` + (food === "BIRYANI"));

console.log(`\nIs num == 7? I predict true.\t\t` + (num == 7));
console.log(`Is num == "7"? I predict true.\t\t` + (num == "7"));
console.log(`Is num === "7"? I predict false.\t` + (num === "7"));
console.log(`Is num == 8? I rpedict false.\t\t` + (num == 8));
console.log(`Is food == num? I predict false.\t` + (food == num));

console.log(`\nIs bool == false? I predict true.\t` + (bool == false));
console.log(`Is bool == 0? I predict true.\t\t` + (bool == 0));