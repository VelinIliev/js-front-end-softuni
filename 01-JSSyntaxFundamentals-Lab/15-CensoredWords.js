function main(sentence, word) {
    function repeat(word) {
        let new_word = '';
        for (let i = 0; i < word.length; i++) {
            new_word += '*'
        }
        return new_word
    }
    let censored = sentence.replace(word, repeat(word));
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word))
    }
    console.log(censored);
}

main('A small sentence with some words', 'small')
main('Find the hidden word hidden', 'hidden')