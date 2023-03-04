function main(start, end) {
    let output = []
    
    if (start.charCodeAt(0) > end.charCodeAt(0)) {
        [start, end] = [end, start];
    }
    for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
        output.push(String.fromCharCode(i));
    }
    console.log(output.join(" "));
}

main('a', 'd')
main('#', ':')
main('C', '#')