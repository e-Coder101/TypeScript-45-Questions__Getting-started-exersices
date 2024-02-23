let pizzas: string[] = ["Sicilian", "BBQ", "Fajita", "Cheese"];

/*pizzas.forEach(pizza => { //this only prints names
    console.log(pizza);
});*/

pizzas.forEach(pizza => {
    if (pizza === "Sicilian") console.log(`\n${pizza} pizza is a classic.`);
    else if (pizza === "BBQ") console.log(`${pizza} pizza is very delicious.`);
    else if (pizza === "Fajita") console.log(`${pizza} pizza is my favorite.`);
    else console.log(`${pizza} pizza is quite popular.`);    
});

console.log(`Pizzas were origially an Italian cuisine.`);