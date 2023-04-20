function main(input) {
    let horses = input.shift().split("|")

    for (let i = 0; i < input.length; i++) {

        let [command, ...data] = input[i].split(" ");

        if (command === "Finish") {
            break;

        } else if(command === "Retake"){

            let horse1 = data[0];
            let horse2 = data[1];
            let index1 = horses.indexOf(horse1)
            let index2 = horses.indexOf(horse2)

            if (index1 < index2) {
                [horses[index1], horses[index2]] = [horses[index2], horses[index1]]
                console.log(`${horse1} retakes ${horse2}.`);
            }

        } else if (command === "Trouble"){

            let horse = data[0];
            let index = horses.indexOf(horse);
            
            if (index !== 0) {
                [horses[index], horses[index-1]]= [horses[index-1], horses[index]]
                console.log(`Trouble for ${horse} - drops one position.`);
            }

        } else if (command === "Rage") {

            let horse = data[0];
            let index = horses.indexOf(horse);

            horses.splice(index + 2 , 0, horses.splice(index, 1));

            console.log(`${horse} rages 2 positions ahead.`);

        } else if (command === "Miracle") {

            let lastHorse = horses.shift();
            horses.push(lastHorse)
            console.log(`What a miracle - ${lastHorse} becomes first.`);
        }
    }
    console.log(horses.join("->"));
    let winner = horses[horses.length - 1];
    console.log(`The winner is: ${winner}`);
}

main((
    [
'Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'
])
)

main(['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])

main((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])
)
