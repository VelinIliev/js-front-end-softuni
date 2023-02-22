function main(number) {
    let divisors = []
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
        
    }
    let sumDivisors = 0;
    divisors.forEach(element => {
        sumDivisors += element
    });
    if (sumDivisors === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
    
}

main(6)
main(28)
main(1236498)