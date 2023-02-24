function colorize() {
    const table = document.querySelectorAll('tr:nth-child(even)')
    console.log(table);
    for (let i = 0; i < table.length; i++) {
        console.log(table[i]);
        table[i].style.backgroundColor = 'Teal'
    }
}