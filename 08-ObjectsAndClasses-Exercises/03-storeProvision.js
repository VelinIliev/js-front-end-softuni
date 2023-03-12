function main(stock, orders) {
    let combined = [...stock, ...orders]
    let products = {}
    
    for (let i = 0; i < combined.length; i += 2) {
        let [product, quantity] = [combined[i], combined[i + 1] * 1];
        if (product in products) {
            products[product] += quantity
        } else {
            products[product] = quantity
        }
    }
    for (let key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

main([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )