function main(num1, num2, operator) {
    let result;
    let operations = {
        'multiply': (x, y) => x * y,
        'divide': (x, y) => x / y,
        'add': (x, y) => x + y,
        'subtract': (x, y) => x - y,
    }
    console.log(operations[operator](num1, num2));
}

main(5,
    5,
    'multiply'
    )

main(40,
    8,
    'divide'
    )
main(12,
    19,
    'add'
    )
main(50,
    13,
    'subtract'
    )