function main(input) {
    let garages = {};
    input.forEach(el => {
        let data = el.split(" - ")
        let garage = data.shift() * 1;
        if (garage in garages) {

        } else {
            garages[garage] = [];
        }
        data.forEach(element => {
            let car = [];
            element = element.split(", ")
            element.forEach(element3 => {
                let x = element3.split(": ");
                car.push(`${x[0]} - ${x[1]}`)
            });
            garages[garage].push(car)
        });
        
    });
    for (let key in garages) {
        console.log(`Garage № ${key}`);
        garages[key].forEach(element => {
            console.log(`--- ${element.join(", ")}`);
        });
    };
}

main(['1 - color: blue, fuel type: diesel', 
    '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', 
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])