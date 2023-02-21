function main(speed, zone) {
    let speed_limit;
    if (zone === 'motorway'){
        speed_limit = 130
    } else if (zone === 'interstate') {
        speed_limit = 90
    } else if (zone === 'city') {
        speed_limit = 50
    } else if (zone === 'residential') {
        speed_limit = 20
    }
    let over_speed = speed - speed_limit
    if (over_speed <= 0) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`);
    } else if (over_speed <= 20){
        console.log(`The speed is ${over_speed} km/h faster than the allowed speed of ${speed_limit} - speeding`);
    } else if (over_speed <= 40) {
        console.log(`The speed is ${over_speed} km/h faster than the allowed speed of ${speed_limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${over_speed} km/h faster than the allowed speed of ${speed_limit} - reckless driving`);

    }

} 

main(40, 'city')
main(21, 'residential')
main(120, 'interstate')
main(200, 'motorway')