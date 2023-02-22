function main(number) {
    let helix = 'ATCGTTAGGG'.split("");
    let symbols = [['**', '', '**'], ['*', '--', '*'], ['', '----', ''], ['*', '--', '*']];

    for (let index = 0; index < number; index++) {
        let first = helix.shift()
        let second = helix.shift()

        let index_symbols = index;
        while(index_symbols > 3){
            index_symbols -= 4
        }
        
        let start = symbols[index_symbols][0];
        let middle = symbols[index_symbols][1];
        let end = symbols[index_symbols][2];
        console.log(`${start}${first}${middle}${second}${end}`);

        helix.push(first)
        helix.push(second)
    }
}

main(4)
console.log();
main(10)
console.log();
main(30)