function main(number1, number2, operator) {
    let result;
    switch (operator) {
        case '+': result = number1 + number2; break;
        case '-': result = number1 - number2; break;
        case '/': result = number1 / number2; break;
        case '*': result = number1 * number2; break;
        case '%': result = number1 % number2; break;
        case '**': result = number1 ** number2; break;
    }
    console.log(result);
}

main(5, 6, '+')
main(3, 5.5, '*')