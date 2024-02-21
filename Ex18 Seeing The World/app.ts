let places: string[] = ["Makkah", "Madina", "Islamabad", "Palestine", "Cairo", 
                        "Singapore","Delhi", "Rome", "Istanbul", "Berlin",
                        "New York", "Tokyo", "Moscow", "Hawaii", "Samarkand"];

//orignal and alphabetical
console.log(`\nOriginal array:\n ${places}\n`);
console.log(`Alphabetical array:\n ${places.toSorted()}\n`);

//original and reverse alphabetical
console.log(`Original array:\n ${places}\n`);
console.log(`Reverse alphabetical array:\n ${places.toSorted().toReversed()}\n`);

//reversed
console.log(`Reversed array:\n ${places.reverse()}\n`);

//reverse again
console.log(`Reversed to original:\n ${places.reverse()}\n`);

//alphabetically sorted
console.log(`Alphabetically sorted array:\n ${places.sort()}\n`);

//reverse alphabetically sorted array
console.log(`Reverse alphabetically sorted array:\n ${places.reverse()}\n`);