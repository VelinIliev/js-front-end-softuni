function solve() {
    const text = document.getElementById('text');
    const namingConvention = document.getElementById('naming-convention');
    const result = document.getElementById('result');

    let output = [];
    let textToConvert = text.value.split(" ")

    if (namingConvention.value === 'Camel Case') {
        console.log(textToConvert);
        for (let i = 0; i < textToConvert.length; i++) {
            if (i === 0) {
                newWord = textToConvert[i]
                output.push(newWord.toLowerCase());
            } else {
                newWord = textToConvert[i].slice(0, 1).toUpperCase() + textToConvert[i].slice(1).toLowerCase();
                output.push(newWord);
            }
            namingConvention.value = '';
            text.value = '';
        }
    } else if (namingConvention.value === 'Pascal Case') {
        for (let i = 0; i < textToConvert.length; i++) {
            newWord = textToConvert[i].slice(0, 1).toUpperCase() + textToConvert[i].slice(1).toLowerCase();
            output.push(newWord);
        }
    } else {
        output.push('Error!')
    }
    result.innerHTML = output.join("")
}