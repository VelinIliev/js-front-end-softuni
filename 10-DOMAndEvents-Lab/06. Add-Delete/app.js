function addItem() {
    const list = document.getElementById('items');
    const newItemText = document.getElementById('newItemText').value;

    if (newItemText.length === 0) return;

    let listItem = document.createElement("li");
    listItem.textContent = newItemText;

    let remove = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    listItem.appendChild(remove);
    list.appendChild(listItem)

    function deleteItem() {
        listItem.remove()
    }

}