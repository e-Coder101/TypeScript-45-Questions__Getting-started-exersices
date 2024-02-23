function describe_city(city: string, country: string = "Pakistan") {
    console.log(`The city of ${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Paris", "France");
describe_city("Rome", "Italy");