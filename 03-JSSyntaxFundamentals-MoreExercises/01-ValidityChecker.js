function main(x1, y1, x2, y2) {
    let coordinates = [[x1, y1, 0, 0], [x2, y2, 0, 0], [x1, y1, x2, y2]]
    coordinates.forEach(el => {
        [x1, y1, x2, y2] = el;
        let checkDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (Number.isInteger(checkDistance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    });
}

main(3, 0, 0, 4)
main(2, 1, 1, 1)
