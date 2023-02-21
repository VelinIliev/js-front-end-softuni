function main(names) {
    names = names.sort((x, y) => x.localeCompare(y))
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

main(["John", "Bob", 'bob', "Christina", "Ema"])
