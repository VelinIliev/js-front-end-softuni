function main(word, text) {
    text = text.split(" ")
    let found_word = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === word.toLowerCase()) {
            console.log(word);
            found_word = true
            break; 
        }
    }
    if (found_word !== true) {
        console.log(`${word} not found!`);
    }
}

main('javascript',
'JavaScript is the best programming language'
)
main('python',
'JavaScript is the best programming language'
)