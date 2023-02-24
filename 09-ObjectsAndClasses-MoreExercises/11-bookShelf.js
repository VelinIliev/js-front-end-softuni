function main(input) {
    let shelfs = {}
    input.forEach(el => {
        let newData = el.split(" -> ")
        if (newData.length > 1){
            let shelf = newData[0];
            let genre = newData[1];
            if (shelf in shelfs) {
                
            } else {
                shelfs[shelf] = {
                    'shelfNo': shelf,
                    'genre': genre,
                    'books': []
                }
            }
        } else {
            newData = newData[0].split(": ");
            newData[1] = newData[1].split(", ")
            let title = newData[0]
            let author = newData[1][0]
            let genre = newData[1][1]
            for (const [key, value] of Object.entries(shelfs)) {
                if (value.genre === genre) {
                    shelfs[key]['books'].push([title, author])
                }
            }
        }
    });

    let sorted = Object.values(shelfs).sort((x, y) => y['books'].length - x['books'].length)
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