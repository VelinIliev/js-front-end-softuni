function main(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        array.push(array.shift())
    }
    console.log(array.join(' '));
}

main([51, 47, 32, 61, 21], 2)