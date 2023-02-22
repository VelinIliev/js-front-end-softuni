function main(input) {
    let matches = input.match(/[a-zA-Z0-9]+/g);
    console.log(matches.join(', ').toUpperCase());
}

main('Hi, how are you?')
main('hello')
main('Functions in JS can be nested, i.e. hold other functions')