function solve() {
    const input = document.getElementById('input');
    const convertBtn = document.querySelector('button');
    const selectMenu = document.getElementById('selectMenuTo');
    const output = document.getElementById('result');

    selectMenu.innerHTML = `
        <option selected value="binary">binary</option>
        <option selected value="hexadecimal">hexadecimal</option>
    `

    function convertTo() {
        if (selectMenu.value == 'binary') {
            output.value = (Number(input.value).toString(2));
        } else if (selectMenu.value == 'hexadecimal') {
            output.value = (Number(input.value).toString(16)).toUpperCase();

        };
    }

    convertBtn.addEventListener('click', convertTo)
}