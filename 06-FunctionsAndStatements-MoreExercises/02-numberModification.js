function main(number) {
    let numString = String(number).split("");
    
    while (true) {
        let sum = 0;
        numString.forEach(element => {
            sum += element * 1
        });
        let avgSum = sum / numString.length
        if (avgSum <= 5){
            numString.push('9')
        } else {
            break;
        }
    }
    
    console.log(numString.join("") * 1);
}

main(101)
main(5835)