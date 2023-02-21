function main(params) {
    number1 = params.shift()
    number2 = params.pop()
    console.log(number1 + number2);
}

main([20, 30, 40])