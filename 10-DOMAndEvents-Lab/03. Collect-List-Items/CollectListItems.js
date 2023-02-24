function extractText() {
    const items = document.getElementById('items');
    const result = document.getElementById('result');
    let output = []
    for (let i = 0; i < items.childNodes.length; i++) {
        if (items.childNodes[i].innerHTML !== undefined) {
            output.push(items.childNodes[i].innerHTML);
        };
        
    }
    result.value = output.join("\n");
}