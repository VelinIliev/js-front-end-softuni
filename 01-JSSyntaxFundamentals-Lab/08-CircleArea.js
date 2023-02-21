function main(radius) {
    if (typeof(radius) !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    } else {
        console.log((Math.PI * radius * radius).toFixed(2));
    };
}

main(5)
main('name')