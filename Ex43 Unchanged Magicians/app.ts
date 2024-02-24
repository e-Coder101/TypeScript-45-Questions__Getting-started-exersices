let magicians: string[] = ["Harry Houdini", "David Copperfiled", "Steve Forte", "David Devant", "Appolo Robbins"];
let great_magicians = [...magicians];

function show_magicians (arr: string[]) { console.log(arr.join(', '))}

function make_great (arr: string[]) {
    for (let index = 0; index < arr.length; index++) {
        arr[index] = "Great " + arr[index];
    }
};

make_great(great_magicians);
show_magicians(magicians);
show_magicians(great_magicians);