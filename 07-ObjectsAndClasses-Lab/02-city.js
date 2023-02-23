function main(params) {
    for (let element in params) {
        console.log(`${element} -> ${params[element]} `);
    }
}

main({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)