function main(params) {
    let input = params.split(" ");
    for (let i = 0; i < input.length; i++) {
        if (input[i].startsWith('#')) {
            input[i] = input[i].substring(1);
            if (input[i] === "") {

            }else if (!/[^a-zA-Z]/.test(input[i])) {
                console.log(input[i]);
            }
        }
    }
}

main('Nowadays everyone uses # to tag a #special word in #socialMedia')
main('The symbol # is known #variously in English-speaking #regions as the #number sign')