function main(...params) {
    let max_number = -1000000;
    params.forEach(element => {
        if (element > max_number) {
            max_number = element
        }
    });
    console.log(`The largest number is ${max_number}.`);
}

main(5, -3, 16)
main(-3, -5, -22.5)