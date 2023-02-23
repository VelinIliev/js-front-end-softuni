function main(input) {
    let meetings = {}
    input.forEach(element => {
        let [day, name] = element.split(' ')
        if (day in meetings){ 
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

// main(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']
// )
main(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)