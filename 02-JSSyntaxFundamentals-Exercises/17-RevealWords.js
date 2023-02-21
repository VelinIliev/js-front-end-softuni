function main(...input) {
    let sentence = input.pop();
    let words = input[0].split(", ");
    let censored_words = []
    words.forEach(el => {
        let new_el = ''
        for (let i = 0; i < el.length; i++) {
            new_el += "*"
        }
        censored_words.push(new_el)
    });
    for (let i = 0; i < words.length; i++) {
        if (sentence.includes(censored_words[i])) {
            sentence = sentence.replace(censored_words[i], words[i])
        }
    }
    
    console.log(sentence);
}

main('great',
'softuni is ***** place for learning new programming languages'
)

main('great, learning',
'softuni is ***** place for ******** new programming languages'
)