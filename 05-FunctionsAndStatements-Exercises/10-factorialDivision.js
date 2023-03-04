function main(num1, num2) {

    function factorial(number) {
        if (number === 1){
            return number;
        }
        return number * factorial(number - 1);
    }

    return (factorial(num1) / factorial(num2)).toFixed(2);
}

console.log(main(5, 2));

console.log(main(6, 2));