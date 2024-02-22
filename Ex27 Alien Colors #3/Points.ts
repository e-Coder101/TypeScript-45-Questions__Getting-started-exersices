export default function Points(color: string){
    if (color === "green"){
        console.log(`You shot down a ${color} alien, you earned 5 points`);
    } else if (color === "yellow") {
        console.log(`You shot down a ${color} alien, you earned 10 points`);
    } else if (color === "red") {
        console.log(`You shot down a ${color} alien, you earned 15 points`);
    } else {
        return;
    }
}