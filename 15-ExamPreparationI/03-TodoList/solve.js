function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadButton = document.getElementById("load-button");
    const addButton = document.getElementById('add-button')
    const todos = document.getElementById('todo-list');
    const title = document.getElementById('title')

    function displayData(data) {
        todos.innerHTML = '' 
        Object.values(data).forEach(el => {
            todos.innerHTML += `<li id="${el._id}"><span>${el.name}</span><button>Remove</button><button>Edit</button></li>`
        });
        
    }

    function getData() {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log(error))
    }

    function sendData() {
        if (title.value !== ""){
            fetch(BASE_URL, {
                method: "POST",
                body: JSON.stringify({
                    "name": title.value,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(data => getData())
            .catch((error) => console.log(error))
        }
        title.value = ""
        
    }
    function deleteData(id) {
        fetch(BASE_URL + id, {
            method: 'DELETE',
            })
        .then(res => res.json()) 
        .then(data => getData())
    }

    function editData(id) {
        const currentLi = document.getElementById(`${id}`);
        text = currentLi.querySelector("span").textContent;
        currentLi.innerHTML = `<input type="text" name="title"/><button>Remove</button><button>Submit</button>`
        let input = currentLi.querySelector("input");
        input.value = text
    }

    function submitData(id) {
        const currentLi = document.getElementById(`${id}`)
        text = currentLi.querySelector("input").value;
        // console.log(text);
        fetch(BASE_URL + id, {
            method: "PATCH",
            body: JSON.stringify({
                "name": text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(data => getData())
        .catch((error) => console.log(error))
    }

    addButton.addEventListener("click", (event) => {
        event.preventDefault()
        sendData()
    } )

    loadButton.addEventListener("click", (event) => {
        event.preventDefault()
        getData()
    })

    todos.addEventListener("click", (e) => {
        if (e.target.textContent === "Remove") {
            deleteData(e.target.parentNode.id)
        } else if (e.target.textContent === "Edit") {
            editData(e.target.parentNode.id)
        } else if (e.target.textContent === "Submit") {
            submitData(e.target.parentNode.id)
        }
    })
}

attachEvents();
