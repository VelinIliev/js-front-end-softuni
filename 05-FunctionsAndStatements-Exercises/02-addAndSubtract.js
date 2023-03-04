function main(num1, num2, num3) {

    const sum = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;

    let total = subtract(sum(num1, num2), num3);

    console.log(total);
}

main(23, 6, 10)
main(42, 58, 100)