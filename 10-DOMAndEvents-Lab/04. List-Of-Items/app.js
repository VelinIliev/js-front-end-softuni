function addItem() {
    const items = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');

    items.innerHTML += `<li>${newItemText.value}</li>\n`
}