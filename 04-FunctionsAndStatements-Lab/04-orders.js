function main(product, quantity) {
    let products = {
        'coffee': 1.5,
        'water': 1,
        'coke': 1.4,
        'snacks': 2
    }
    let total = products[product] * quantity
    console.log(total.toFixed(2));
}

main("water", 5)
main("coffee", 2)