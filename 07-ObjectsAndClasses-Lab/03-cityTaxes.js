function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        'taxRate': 10,
        collectTaxes() {this.treasury += this.population * this.taxRate},
        applyGrowth(x) {this.population = Math.floor(this.population * (1 + x / 100))},
        'applyRecession': function(x) {this.treasury = Math.floor(this.treasury  * (1 - x / 100))}

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

