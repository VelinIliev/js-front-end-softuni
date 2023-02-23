function cityTaxes(name, population, treasury) {
    let city = {
        'name': name,
        'population': population,
        'treasury': treasury,
        'taxRate': 10,
        'collectTaxes': () => city['treasury'] += city['population'] * city['taxRate'],
        'applyGrowth': (x) => city['population'] = Math.floor(city['population'] * (1 + x / 100)),
        'applyRecession': (x) => city['treasury'] = Math.floor(city['treasury']  * (1 - x / 100))

    }
    return city
}

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);

console.log(city.population);
city.applyRecession(5);
console.log(city.treasury);

