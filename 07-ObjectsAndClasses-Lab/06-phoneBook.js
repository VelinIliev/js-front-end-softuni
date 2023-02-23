function main(input) {
    let phoneBook = {}
    input.forEach(element => {
        let [name, phone] = element.split(" ");
        phoneBook[name] = phone
    });
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

main(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)