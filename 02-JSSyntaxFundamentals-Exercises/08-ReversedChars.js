function main(...params) {
    output = ""
    for (let i = params.length - 1; i >= 0; i--) {
        output += `${params[i]} `; 
    }
    console.log(output);
}

main('A', 'B', 'C')
main('1', 'L', '&' )