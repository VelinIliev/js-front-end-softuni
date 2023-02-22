function main(...params) {
    let min = 1000000000000;
    params.forEach(el => {
        if (el < min) {
            min = el
        }
    });
    console.log(min);
}

main(2, 5, 3)
main(600,
    342,
    123
    )
main(25,
    21,
    4
    )
main (2,
    2,
    2
    )