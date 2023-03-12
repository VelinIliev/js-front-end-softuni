function main(input) {
    let shelves = {}
    input.forEach(el => {
        let newData = el.split(" -> ")
        if (newData.length > 1){
            let [shelf, genre] = newData;
            if (! (shelf in shelves)) {
                shelves[shelf] = {
                    'shelfNo': shelf,
                    'genre': genre,
                    'books': []
                }
            }
        } else {
            newData = newData[0].split(": ");
            let title = newData.shift()
            let [author, genre] = newData[0].split(", ")

            for (const [key, value] of Object.entries(shelves)) {
                if (value.genre === genre) {
                    shelves[key]['books'].push([title, author])
                }
            }
        }
    });

    let sorted = Object.values(shelves).sort((x, y) => y['books'].length - x['books'].length)
    sorted.forEach(el => {
        console.log(`${el.shelfNo} ${el.genre}: ${el.books.length}`);
        let sortedBooks = el.books.sort((x,y) => x[0].localeCompare(y[0]))
        for (const key of sortedBooks) {
            console.log(`--> ${key[0]}: ${key[1]}`);
        }
    });
}

main(
    ['1 -> history', 
    '1 -> action', 
    'Death in Time: Criss Bell, mystery', 
    '2 -> mystery', 
    '3 -> sci-fi', 
    'Child of Silver: Bruce Rich, mystery', 
    'Hurting Secrets: Dustin Bolt, action', 
    'Future of Dawn: Aiden Rose, sci-fi', 
    'Lions and Rats: Gabe Roads, history', 
    '2 -> romance', 
    'Effect of the Void: Shay B, romance', 
    'Losing Dreams: Gail Starr, sci-fi', 
    'Name of Earth: Jo Bell, sci-fi', 
    'Pilots of Stone: Brook Jay, history']
);

// main([
//     '1 -> mystery', 
//     '2 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Lions and Rats: Gabe Roads, history',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Aame of Earth: Jo Bell, sci-fi']
// )