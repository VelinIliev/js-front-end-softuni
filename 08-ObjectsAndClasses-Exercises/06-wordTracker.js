function main(input) {
    let words = {}
    let [searchWords, ...sentence] = input

    searchWords = searchWords.split(" ")
    
    for (let i = 0; i < searchWords.length; i++) {
        let word = searchWords[i]
        words[word] = sentence.filter(w => w === word).length
    }

    words = Object.entries(words)
        .sort((a, b) => b[1] - a[1])

    for (const [word, count] of words) {
        console.log(`${word} - ${count}`);
    }
}

main([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )

console.log();

main([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )