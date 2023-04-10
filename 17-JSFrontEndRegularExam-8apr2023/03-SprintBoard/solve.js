function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBoardBtn = document.getElementById('load-board-btn');
    const inProgressSection = document.getElementById("in-progress-section");
    const codeReviewSection = document.getElementById("code-review-section");
    const doneSection = document.getElementById("done-section");
    const todoSection = document.getElementById('todo-section');
    const createTaskBtn = document.getElementById('create-task-btn');
    const titleVa = document.getElementById('title');
    const descriptionVa = document.getElementById("description");
    

    loadBoardBtn.addEventListener("click", loadData);

    createTaskBtn.addEventListener("click", addTask);

    function loadData() {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.log(error))
    }

    function displayProducts(data) {

        todoSection.innerHTML = '';
        inProgressSection.innerHTML = '';
        codeReviewSection.innerHTML = '';
        doneSection.innerHTML = '';

        Object.values(data).forEach(el => {
            if (el.status === "ToDo") {
                createTask(el._id, el.title, el.description, "Move to In Progress", todoSection);
            } else if(el.status === "In Progress") {
                createTask(el._id, el.title, el.description, "Move to Code Review", inProgressSection);
            } else if (el.status === "Code Review") {
                createTask(el._id, el.title, el.description, "Move to Done", codeReviewSection);
            } else if (el.status === "Done") {
                createTask(el._id, el.title, el.description, "Close", doneSection);
                
            };
            
        })
    }

    function createTask(id, title, description, btnText, where) {
        let liEl = document.createElement("LI");
        liEl.className = "task";
        liEl.id = id;
        where.appendChild(liEl);

        let h3El = document.createElement("H3");
        h3El.textContent = title;
        liEl.appendChild(h3El);

        let pEl = document.createElement("P");
        pEl.textContent = description;
        liEl.appendChild(pEl);

        let btn1 = document.createElement("button");
        btn1.textContent = btnText;
        liEl.appendChild(btn1);

        btn1.addEventListener("click", (e)=> {
            changeStatus(e.target.parentNode.id, btnText)
        })
    }
    

    function addTask(e) {
        if (titleVa.value && descriptionVa.value ){
            fetch(BASE_URL, {
                method: "POST",
                body: JSON.stringify({
                    "title": titleVa.value,
                    "description": descriptionVa.value,
                    "status": "ToDo"
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(data => loadData())
            .catch((error) => console.log(error))
        }
    }
    function changeStatus(id, message) {
        if (message === "Move to In Progress") {
            sendPatch(id, "In Progress")
        } else if (message === "Move to Code Review") {
            sendPatch(id, "Code Review")
        } else if (message === "Move to Done") {
            sendPatch(id, "Done")
        } else if (message === "Close") {
            deleteItem(id)
        }
        
    }
    function sendPatch(id, newStatus) {
        fetch(BASE_URL + id, {
            method: "PATCH",
            body: JSON.stringify({
                "status": newStatus
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(data => loadData())
        .catch((error) => console.log(error))
    }
    function deleteItem(id) {
        fetch(BASE_URL + id, {
            method: 'DELETE',
            })
        .then(res => res.json()) 
        .then(data => loadData())
    }
}   

attachEvents();