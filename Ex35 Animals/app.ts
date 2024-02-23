let animals: string[] = ["Cat", "Dog", "Rabbit", "Cheetah"];

/*animals.forEach(animal => { //this only prints names
    console.log(animal);
});*/

animals.forEach(animal => {
    if (animal === "Cat") console.log(`${animal}s are very clean animals.`);
    else if (animal === "Dog") console.log(`${animal}s are loyal animals`);
    else if (animal === "Rabbit") console.log(`${animal}s live in burrows.`);
    else console.log(`${animal}s are the fastest land animals.`);
});
console.log(`All of these animals are mammals.`);