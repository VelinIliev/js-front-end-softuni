function main(input) {
    let towns = []
    input.forEach(el => {
        
        let [town, latitude, longitude] = el.split(" | ")
        let new_town = {
            'town': town,
            'latitude': (latitude * 1).toFixed(2),
            'longitude': (longitude * 1).toFixed(2)
        }
        towns.push(new_town)
    });
    towns.forEach(town => {
        console.log(town);
    });
}

main(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)