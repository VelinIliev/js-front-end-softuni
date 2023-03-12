function main(input) {
    let dictionary = {}
    input.forEach(element => {
       let newTerm = JSON.parse(element); 
       let [term, definition] = [Object.keys(newTerm), Object.values(newTerm)];
       dictionary[term] = definition
    });
    let sortedKeys = Object.keys(dictionary).sort()
    for (let i = 0; i < sortedKeys.length; i++) {
        console.log(`Term: ${sortedKeys[i]} => Definition: ${dictionary[sortedKeys[i]]}`);
    }
}

main([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )