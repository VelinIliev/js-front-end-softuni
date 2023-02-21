function main(numbers) {
    let even_numbers = []
    let odd_numbers = []
    numbers.forEach(el => {
        if (el % 2 === 0) {
            even_numbers.push(el)
        } else {
            odd_numbers.push(el)
        }
    });
    let even_sum = even_numbers.reduce((x, y) => x + y, 0 );
    let odd_sum = odd_numbers.reduce((x, y) => x + y, 0);
    console.log(even_sum - odd_sum);
}

main([1,2,3,4,5,6])
