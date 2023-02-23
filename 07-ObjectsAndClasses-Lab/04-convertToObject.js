function main(input) {
    let new_object = JSON.parse(input)
    for( let key in new_object) {
        console.log(`${key}: ${new_object[key]}`);
    }
}

main('{"name": "George", "age": 40, "town": "Sofia"}')