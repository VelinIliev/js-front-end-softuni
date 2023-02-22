function main(base, increacment) {
    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0 ;
    let width = base;
    let length = base;
    let height = increacment;
    let layer = 0;

    while (width > 0) {
        layer += 1;
        let size = width * length;
        let innner = ((width - 2) * (length - 2)) ;
        let outer = size - innner;
        if (width === 1) {
            outer = 1
            innner = 0
            gold += outer * height
        } else if (width === 2) {
            outer = 4
            innner = 0
            gold += outer * height
        } else if (layer % 5 === 0) {
            lazuli += outer * height
        } else {
            marble += outer * height;
        }
        stone += innner * height;
       
        width -= 2;
        length -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(layer * height)}`);
}

main(11, 1)
console.log();
main(11,
    0.75
    )
console.log();
main(12,
    1
    )
console.log();
main(23,
    0.5
    )
console.log();
main(3,
    2
    )