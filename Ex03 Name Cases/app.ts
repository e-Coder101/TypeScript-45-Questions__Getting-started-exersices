function toTitleCase(str: string){
    let strArray = str.split(" ");
    for(let i = 0; i < strArray.length; i++){
        strArray[i] = strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1).toLowerCase();
    }
    return strArray.join(" ");
}

let personName: string = "ebAd UR reHMan";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));