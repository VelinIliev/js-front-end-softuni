function main(array) {
    let finalArray = [];
    for (let currentArray of array) {
        currentArray = JSON.parse(currentArray).sort((a, b) => b - a);
        finalArray.push(currentArray);
    }
    finalArray = finalArray.map(x => JSON.stringify(x));
    finalArray = [...new Set(finalArray)];
    finalArray = finalArray.map(x => JSON.parse(x)).sort((a, b) => a.length - b.length);
    finalArray.forEach(x => console.log(`[${x.join(', ')}]`))
}

main(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)

main(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
)