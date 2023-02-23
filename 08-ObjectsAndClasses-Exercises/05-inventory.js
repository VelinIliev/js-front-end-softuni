function main(input) {
    let heroes = []
    input.forEach(el => {
        let [heroName, level, items] = el.split(" / ")
        items = items.split(', ')
        new_hero = {'name': heroName, 'level': level * 1, 'items': items}
        heroes.push(new_hero)
    });
    heroes.sort((a,b) => (a.level > b.level) ? 1 : ((b.level > a.level) ? -1 : 0))

    for (let i = 0; i < heroes.length; i++) {
        console.log(`Hero: ${heroes[i].name}`);
        console.log(`level => ${heroes[i].level}`);
        console.log(`items => ${heroes[i].items.join(", ")}`);
        
    }
}


main([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

main([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )