function main(input) {
    let employees = {}
    input.forEach(el => {
        employees[el] = el.length;
    });
    for (let key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

main([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )

main([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )