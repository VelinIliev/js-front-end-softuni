function main(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2
    }
    function substract(num1, num2) {
        return num1 - num2
    }
    let total = substract(sum(num1, num2), num3)
    console.log(total);
}

main(23,
    6,
    10
    )