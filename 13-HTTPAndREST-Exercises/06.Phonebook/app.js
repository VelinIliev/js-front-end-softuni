function attachEvents() {
    // TODO:
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const phoneBook = document.getElementById('phonebook');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone')


    function displayPhoneBook(data) {
        phoneBook.innerHTML = ''
        Object.values(data).forEach( entry => {
            phoneBook.innerHTML += 
            `<li id='${entry._id}'>${entry.person}: ${entry.phone}<button class="dltBtn">Delete</button></li>`
        })
    }

    function getData() {
        fetch(url)
        .then((response) => response.json())
        .then((data) => displayPhoneBook(data))
        .catch((error) => console.log(error))
    }

    function deleteEntry(id) {
        fetch(`${url}/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(getData())
        .catch(error => console.log(error));
    }

    function createPerson() {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "person": person.value,
                "phone": phone.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(data => { getData() })
        .catch((error) => console.log(error))
        person.value = '';
        phone.value = '';
        
    }

    btnLoad.addEventListener('click', getData);
    btnCreate.addEventListener('click', createPerson)
    document.addEventListener('click', (e) => {
        if (e.target.className === 'dltBtn'){
            deleteEntry(e.target.parentNode.id)
        }
        
    })

}

attachEvents();