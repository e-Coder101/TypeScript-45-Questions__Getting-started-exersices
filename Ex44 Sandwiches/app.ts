function make_sandwhich (...args: string[]) {
    args.length === 1? 
    console.log(`Customer number ${count++} just wants ${args} in their sandwhich.\n`) :
    console.log(`Customer number ${count++} wants the following ingredients in their sandwich;\n\t${args.slice(0, -1).join(', ')} and ${args.slice(-1)}.\n`);
}

let count = 1;
make_sandwhich("beef patty", "ketchup", "mayonnaise");
make_sandwhich("mushrooms", "tomatoes", "cucumbers", "onions", "eggs", "cheddar cheese", "mayonnaise", "ranch sauce");
make_sandwhich("chicken spread");
make_sandwhich("chicken patty", "lettuce");