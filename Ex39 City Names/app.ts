let city_country = (city: string, country: string): string => `${city}, ${country}`

console.log(`
${city_country("Karachi", "Pakistan")}
${city_country("Delhi", "India")}
${city_country("Paris", "France")}
${city_country("Rome", "Italy")}
`);