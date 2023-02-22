function main(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "/": result = num1 / num2; break;
        case "*": result = num1 * num2; break;
    }
    console.log(result.toFixed(2));
}

main(5,'+',10)
main(25.5,'-',3)
main(2,'*',10)
main(2,'/',10)
main(2,'/',0)