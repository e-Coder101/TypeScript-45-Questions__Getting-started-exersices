export default function Points(color: string){
    if (color === "green"){
        console.log(`You shot down a ${color} alien, you earned 5 points`);
    } else {
        console.log(`You shot down a ${color} alien, you earned 10 points`);
    }
}