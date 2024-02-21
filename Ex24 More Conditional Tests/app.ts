let str1: string = "abc", str2: string = "ABC";

console.log(`str1 == "abc", prediction 'true'.\t\t` + (str1 == "abc"));
console.log(`str2 != "ABC", prediction 'false'.\t\t` + (str2 != "ABC"));

console.log(`\nstr1 == str2, prediction 'false'.\t\t` + (str1 == str2));
console.log(`str1 == str2.ToLowerCase(), prediction 'true'.\t` + (str1 == str2.toLowerCase()));

console.log(`\n1 == 1, prediction 'true'.\t\t\t` + (1 == 1));
console.log(`2 == 5, prediction 'false'.\t\t\t` + (2 == 5));

console.log(`\n5 != -5, prediction 'true'.\t\t\t` + (5 != -5));
console.log(`7 != 7, prediction 'false'.\t\t\t` + (7 != 7));

console.log(`\n6 > 3, prediction 'true'.\t\t\t` + (6 > 3));
console.log(`6 > 6, prediction 'false'.\t\t\t` + (6 > 6));

console.log(`\n9 < 9, prediction 'false'\t\t\t` + (9 < 9));
console.log(`4 < 5, prediction 'true'\t\t\t` + (4 < 5));

console.log(`\n4 >= 5, prediction 'false'.\t\t\t` + (4 >= 5));
console.log(`2 >= 2, prediction 'true'.\t\t\t` + (2 >= 2));

console.log(`\n3 <= 5, prediction 'true'.\t\t\t` + (3 <= 5));
console.log(`5 <= 1, prediction 'false'.\t\t\t` + (5 <= 1));

console.log(`\n(1 == 1) && (0 < 5), prediction 'true'.\t\t` + ((1 == 1) && (0 < 5)));
console.log(`(1 == 5) && (4 < 5), prediction 'false'.\t` + ((1 == 5) && (4 < 5)));

console.log(`\ntrue || false, prediction 'true'.\t\t` + (true || false));
console.log(`(0 < 0) || (6 < 5), prediction 'false'.\t\t` + ((0 < 0) || (6 < 5)));

let arr: number[] = [1, 3, 5, 7];
console.log(`\n\tarray: ${arr.join(', ')}`);
console.log(`arr.includes(5), prediction 'true'` + (arr.includes(5)));
console.log(`arr.includes(5), prediction 'false'` + (arr.includes(6)));