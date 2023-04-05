function main(params) {
    let pieces = {}
    let n = params.shift()
    for (let index = 0; index < n; index++) {
        const element = params.shift();
        let [piece, composer, key] = element.split("|");
        pieces[piece] = {
            composer,
            key}
    }
    params.forEach(el => {
        let [command, ...newParams] = el.split("|");
        if (command === "Add") {
            let [piece, composer, key] = newParams

            if (piece in pieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {composer, key}
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {
            let piece = newParams[0]
            if (piece in pieces) {
                delete pieces[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let [piece, key] = newParams;
            if (piece in pieces) {
                pieces[piece].key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            };
        } else if (command === "Stop") {
            for (const key in pieces) {
                // console.log(key, pieces[key]);
                console.log(`${key} -> Composer: ${pieces[key].composer}, Key: ${pieces[key].key}`);
            }
        }
    });
    // console.log(pieces);
}

// main([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'  
//   ]
//   )

  main([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )