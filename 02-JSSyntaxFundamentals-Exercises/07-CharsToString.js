function main(...params) {
    let output = ''
    params.forEach(el => {
        output += el
    });
    console.log(output);
}

main('a', 'b', 'c')