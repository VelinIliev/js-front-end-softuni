function solve() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    let text = input.value.split(".");
    let counter = 0;
    let paragraphs  = [];
    let paragraph = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i].length > 0){
            counter += 1 ;
            paragraph.push(text[i]);
            if (counter === 3) {
              counter = 0;
              paragraphs.push(paragraph);
              paragraph = [];
            }
        }
        if (i === text.length - 1 && paragraph.length > 0) {
            paragraphs.push(paragraph)
        }
    }
    paragraphs.forEach(p => {
        let newP = document.createElement('p');
        newP.textContent = `${p.join(". ")}.`;
        output.appendChild(newP)
    })
}
