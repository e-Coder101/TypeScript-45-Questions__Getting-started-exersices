let make_shirt = (size: string = "large", message: string = "I love TypeScript"): string => `The shirt's size is ${size} and its message is '${message}'.`

console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small", "YOLO"));