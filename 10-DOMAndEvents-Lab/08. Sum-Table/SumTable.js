function sumTable() {
    const tdList = document.querySelectorAll('tr td:nth-child(2)' );
    const result = document.getElementById('sum');

    let sumColumn = 0
    for (let i = 0; i < tdList.length - 1; i++) {
        sumColumn += tdList[i].innerHTML * 1;
        
    }
    result.innerHTML = sumColumn
}