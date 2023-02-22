function main(start, end) {
    let output = []
    
    if (start.charCodeAt() > end.charCodeAt()) {
        [start, end] = [end, start];
    }
    for (let i = start.charCodeAt() + 1; i < end.charCodeAt(); i++) {
        output.push(String.fromCharCode(i));
    }
    console.log(output.join(" "));
}

main('a', 'd')
main('#', ':')
main('C', '#')