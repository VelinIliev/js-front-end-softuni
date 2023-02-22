function main(input) {
    let cleaned = 0;
    input.forEach(command => {
        if (command === 'soap') {
            cleaned += 10
        } else if (command === 'water') {
            cleaned *= 1.2
        } else if (command === 'vacuum cleaner'){
            cleaned *= 1.25
        } else if (command === 'mud') {
            cleaned *= .9
        }
    });
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}

main(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
main(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])