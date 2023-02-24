function deleteByEmail() {
    const customers = document.getElementById('customers');
    const result = document.getElementById('result');
    const input = document.getElementsByTagName("INPUT")[0].value;

    let isFound = false
    for (let i = 0; i < customers.children[1].children.length; i++) {
        let email = customers.children[1].children[i].children[1].innerHTML;
        if (email === input) {
            customers.children[1].removeChild(customers.children[1].children[i]);            
            isFound = true
        }
    }
    if (isFound) {
        result.innerHTML = 'Deleted'
    } else {
        result.innerHTML = 'Not found.'
    }
}