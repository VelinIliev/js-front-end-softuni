function main(input) {
    let movies = []
    input.forEach(el => {
        if (el.includes('addMovie')) {
            let name = el.split(" ");
            name.shift()
            name = name.join(" ")
            let movie = {'name': name}
            movies.push(movie)
        } else if (el.includes('directedBy')) {
            let data = el.split(' ');
            let index = data.indexOf('directedBy');
            let movieName = data.slice(0, index).join(" ")
            let directorName = data.slice(index + 1, data.length).join(" ")
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movieName) {
                    movies[i]['director'] = directorName;
                }
            }
        } else if (el.includes('onDate')) {
            let data = el.split(' ');
            let index = data.indexOf('onDate');
            let movieName = data.slice(0, index).join(" ")
            let date = data.slice(index + 1, data.length).join(" ")
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movieName) {
                    movies[i]['date'] = date;
                }
            }
        }
    });
    for (let i = 0; i < movies.length; i++) {
        if (Object.keys(movies[i]).length === 3) {
            console.log(JSON.stringify(movies[i]));
        }
    }
}

main([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )

main([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )