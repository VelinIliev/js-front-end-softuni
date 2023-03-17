function extract(content) {
    const text = document.getElementById(content);
    const regex = /\([\w+ ]+\)/gm;
    const found = text.innerHTML.match(regex);

    let output = []
    for (let i = 0; i < found.length; i++) {
        output.push(found[i].slice(1, found[i].length - 1 ));
    }
    console.log(output);
    return output.join("; ")
}