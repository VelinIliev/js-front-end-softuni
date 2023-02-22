function main(num1, num2) {
    function factorial(number) {
        let num1Factorial = 1;
        for (let i = 1; i <= number; i++) {
            num1Factorial *= i
        }
        return num1Factorial
    }
    console.log((factorial(num1) / factorial(num2)).toFixed(2))
}

main(5, 2)
main(6, 2)