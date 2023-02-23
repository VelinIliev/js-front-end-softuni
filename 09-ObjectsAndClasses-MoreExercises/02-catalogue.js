function main(input) {

    function sortObj(obj) {
        return Object.keys(obj).sort((x, y) => x.localeCompare(y)).reduce(function (result, key) {
          result[key] = obj[key];
          return result;
        }, {});
    }

    let products = {}
    input.forEach(element => {
        let [product, price] = element.split(" : ");
        let firstLetter = product[0];
        if (firstLetter in products){
            products[firstLetter][product] = price * 1
        } else {
            products[firstLetter] = {}
            products[firstLetter][product] = price * 1
        }
        
    });
    products = sortObj(products);
    for (let key in products){
        console.log(key);
        let sorted_values = sortObj(products[key])
        for (let key2 in sorted_values) {
            console.log(`  ${key2}: ${sorted_values[key2]}`);
        }
    }
}


main([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )

main([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
    )