function main(params) {
    let finalTickness = params.shift()
    params.forEach(element => {
        let currentChunk = element;
        console.log(`Processing chunk ${currentChunk} microns`);
        while (currentChunk != finalTickness) {
            let counter = 0
            while (currentChunk / 4 >= finalTickness - 1){
                currentChunk /=  4;
                counter += 1
            }
            if (counter) {
                console.log(`Cut x${counter}`);
                currentChunk = Math.floor(currentChunk)
                console.log(`Transporting and washing`);
                counter = 0
            }
            
            while (currentChunk * .8 >= finalTickness - 1) {
                currentChunk *= .8
                counter += 1
            }
            if (counter) {
                console.log(`Lap x${counter}`);
                currentChunk = Math.floor(currentChunk)
                console.log(`Transporting and washing`);
                counter = 0
            }
            while (currentChunk - 20 >= finalTickness - 1) {
                currentChunk -= 20
                counter += 1
            }
            if (counter) {
                console.log(`Grind x${counter}`);
                currentChunk = Math.floor(currentChunk)
                console.log(`Transporting and washing`);
                counter = 0
            }
            while (currentChunk - 2 >= finalTickness - 1) {
                currentChunk -= 2
                counter += 1
            }
            if (counter) {
                console.log(`Etch x${counter}`);
                currentChunk = Math.floor(currentChunk)
                console.log(`Transporting and washing`);
                counter = 0
            }
            if (currentChunk === finalTickness - 1) {
                currentChunk += 1
                console.log(`X-ray x1`);
            }
            break
        }
        console.log(`Finished crystal ${finalTickness} microns`);
    });
}

// main([1375, 50000])
main([1000, 4000, 8100])