function main(name, lastName, hairColor) {
    let new_object = {
        "name": name,
        "lastName": lastName,
        "hairColor": hairColor
    }
    return JSON.stringify(new_object)
}

main('George', 'Jones', 'Brown')