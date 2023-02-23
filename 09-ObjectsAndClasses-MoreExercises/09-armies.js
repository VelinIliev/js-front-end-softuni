function main(input) {
    let armies = {};
    input.forEach(element => {
        let data = element.split(" ");
        if (data.includes('arrives')) {
            data.pop();
            let leader = data.join(" ");
            if (leader in armies) {

            } else {
                armies[leader] = {'total': 0};
            }
        } else if (data.includes('defeated')) {
            data.pop();
            let leader = data.join(" ");
            if (leader in armies) {
                delete armies[leader]
            }
        } else if (data.includes("+")) {
            let army = data.shift();
            let quantity = data.pop() * 1;
            for (let leader in armies) {
                for (let key in armies[leader]) {
                    if (key === army) {
                        armies[leader][key] += quantity;
                        armies[leader]['total'] += quantity;
                    }
                };
            }
        } else {
            let new_data = element.split(": ")
            let leader = new_data.shift();
            let army = new_data[0].split(", ")[0];
            let quantity = new_data[0].split(", ")[1];
            if (leader in armies) {
                armies[leader][army] = quantity * 1;
                armies[leader]['total'] += quantity * 1;
            }
        }
    });
    let sorted = Object.entries(armies);
    sorted.sort( (a, b) => b[1]['total'] - a[1]['total']);
    sorted.forEach(element => {
        sorted_armies = Object.entries(element[1]);
        sorted_armies.sort((a, b) => b[1] - a[1]);
        console.log(`${element[0]}: ${element[1]['total']}`);
        sorted_armies.forEach(element => {
            if (element[0] !== 'total') {
                console.log(`>>> ${element[0]} - ${element[1]}`);
            }
        });
    });
}

main(['Rick Burr arrives', 
    'Fergus: Wexamp, 30245', 
    'Rick Burr: Juard, 50000', 
    'Findlay arrives', 
    'Findlay: Britox, 34540', 
    'Wexamp + 6000', 
    'Juard + 1350', 
    'Britox + 4500', 
    'Porter arrives', 
    'Porter: Legion, 55000', 
    'Legion + 302', 
    'Rick Burr defeated', 
    'Porter: Retix, 3205']);