function main(params) {
    let strNumber = String(params).split("");
    let oddSum = 0;
    let evenSum = 0;
    strNumber.forEach(element => {
        if ( element * 1 % 2 === 0) {
            evenSum += element * 1
        } else {
            oddSum += element * 1
        }
    });
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

main(1000435)
main(3495892137259234)