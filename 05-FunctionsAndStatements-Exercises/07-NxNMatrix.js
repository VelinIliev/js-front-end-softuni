function main(number) {
    let matrix = new Array(number).fill(new Array(number).fill(number))
    // for (let i = 0; i < number; i++) {
    //     let row = []
    //     for (let j = 0; j < number; j++) {
    //         row.push(number)
    //     }
    //     console.log(row.join(" "));
    // }
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

main(7)