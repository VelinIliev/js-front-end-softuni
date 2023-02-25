function addItem() {
    const menu = document.querySelector('#menu');
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    if (newItemText.value !== '' && newItemValue.value !== ''){
        menu.innerHTML += `<option value="${newItemValue.value}">${newItemText.value}</option>`;
        newItemText.value = '';
        newItemValue.value = '';
    }
}