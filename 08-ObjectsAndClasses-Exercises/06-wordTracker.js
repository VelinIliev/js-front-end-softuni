function main(input) {
    let words = {}
    let [searchWords, ...sentence] = input
    searchWords = searchWords.split(" ")
    for (let i = 0; i < searchWords.length; i++) {
        words[searchWords[i]] = 0
    }
    sentence.forEach(el => {
        if (el in words) {
            words[el] += 1
        }
    });
    words = Object.entries(words)
        .sort((a, b) => b[1] - a[1])
    
    for (let i = 0; i < words.length; i++) {
        console.log(`${words[i][0]} - ${words[i][1]}`);
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