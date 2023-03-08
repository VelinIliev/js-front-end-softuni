function main(input) {
    let adresses = {}
    input.forEach(element => {
        let [name, address] = element.split(":")
        adresses[name] = address
    });
    let sortedKeys = Object.keys(adresses).sort((a, b) => a.localeCompare(b));
    sortedKeys.forEach(key => {
        console.log(`${key} -> ${adresses[key]}`);
    });
}

// main(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// )
main(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)