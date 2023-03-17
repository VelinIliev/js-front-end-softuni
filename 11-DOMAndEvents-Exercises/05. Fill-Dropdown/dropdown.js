function addItem() {
    const menu = document.querySelector('#menu');
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    if (newItemText.value !== '' && newItemValue.value !== ''){
        let newOption = document.createElement('option');
        newOption.value = newItemValue.value;
        newOption.textContent = newItemText.value;
        menu.appendChild(newOption)
        newItemText.value = '';
        newItemValue.value = '';
    }
}