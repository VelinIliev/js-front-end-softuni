function generateReport() {
    const titles = document.querySelectorAll('thead tr th');
    const content = document.querySelectorAll('tbody tr');
    const outputTextarea = document.getElementById('output')

    let columnsToGenerate = [];
    let columnsNames = []

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].children[0].checked) {
            columnsNames.push(titles[i].textContent.trim());
            columnsToGenerate.push(i)
        }
    }
    let output = [];

    for (let i = 0; i < content.length; i++) {
        let report = {}
        for (let j = 0; j < columnsToGenerate.length; j++) {
            report[columnsNames[j].toLowerCase()] = content[i].children[columnsToGenerate[j]].innerHTML;
        }
        output.push(report)
    }
    outputTextarea.innerHTML = JSON.stringify(output)
}