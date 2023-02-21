function main(sentence, word) {
    sentence = sentence.split(" ");
    let counter = 0
    sentence.forEach(el => {
        if (el === word) {
            counter += 1;
        }
    });
    console.log(counter);
}

main('This is a word and it also is a sentence',
'is'
)

main('softuni is great place for learning new programming languages',
'softuni'
)