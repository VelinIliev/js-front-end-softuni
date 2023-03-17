function solve() {
    const input = document.getElementById('input');
    const convertBtn = document.querySelector('button');
    const selectMenu = document.getElementById('selectMenuTo');
    const output = document.getElementById('result');

    let convert = {
        'binary': (x) => Number(x).toString(2),
        'hexadecimal': (x) => Number(x).toString(16).toUpperCase()
    }

    selectMenu.innerHTML = '';

    for (const key in convert) {
        const optionEl = document.createElement('option');
        optionEl.value = key;
        optionEl.textContent = key;
        selectMenu.appendChild(optionEl);
    }

    function convertTo() {
        let numberToConvert = input.value
        output.value = convert[selectMenu.value](numberToConvert)
    }

    convertBtn.addEventListener('click', convertTo)
}