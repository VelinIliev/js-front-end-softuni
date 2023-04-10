window.addEventListener('load', solve);

function solve() {
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn')
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const label = document.getElementById('label');
    const points = document.getElementById('points');
    const assignee = document.getElementById('assignee');
    const tasksSection = document.getElementById('tasks-section');
    const totalSprintPoints = document.getElementById("total-sprint-points");
    const taskId = document.getElementById("task-id");

    let lastTask = 0;
    let totalPoint = 0;
    let tasks = {};
    let labels = {
        "Feature": {
            "sign": "&#8865",
            "class": "feature",
        },
        "Low Priority Bug": {
            "sign": "&#9888",
            "class": "low-priority",
        },
        "High Priority Bug": {
            "sign": "&#9888",
            "class": "high-priority",
        }
    }

    createTaskBtn.addEventListener("click", (e) => {

        e.preventDefault()
        
        if (title.value && description.value &&  label.value && points.value && assignee.value) {
            
            lastTask += 1;
            id = lastTask

            tasks[`task-${id}`] = {
                "taskId": `task-${id}`,
                "title": title.value,
                "description": description.value,
                "label": label.value,
                "points": points.value,
                "assignee": assignee.value
            }

            totalPoint += points.value * 1
            totalSprintPoints.textContent = `Total Points ${totalPoint}pts`;

            let articleEl = document.createElement("ARTICLE")
            articleEl.id  = tasks[`task-${id}`].taskId;
            articleEl.className = `task-card`;
            tasksSection.appendChild(articleEl);

            let divEl = document.createElement("DIV");
            divEl.className = `task-card-label ${labels[label.value].class}`;
            divEl.innerHTML = `${label.value} ${labels[label.value].sign}`;
            articleEl.appendChild(divEl)

            let h3El = document.createElement("H3");
            h3El.className = "task-card-title";
            h3El.textContent = `${title.value}`;
            articleEl.appendChild(h3El);

            let pEl = document.createElement("P");
            pEl.className = "task-card-description";
            pEl.textContent = description.value;
            articleEl.appendChild(pEl);

            let divPoints = document.createElement("DIV");
            divPoints.className = "task-card-points";
            divPoints.textContent = `Estimated at ${points.value} pts`;
            articleEl.appendChild(divPoints);

            let divAssignee = document.createElement("DIV");
            divAssignee.className = "task-card-assignee";
            divAssignee.textContent = `Assigned to ${assignee.value}`;
            articleEl.appendChild(divAssignee);

            let divActions = document.createElement("DIV");
            divActions.className = 'task-card-actions';
            articleEl.appendChild(divActions);

            let btnDelete = document.createElement("BUTTON");
            btnDelete.className = 'task-card-actions';
            btnDelete.textContent = "Delete";
            divActions.appendChild(btnDelete);

            btnDelete.addEventListener("click", deleteItem);

        };

        title.value = '';
        description.value = '';
        points.value = '';
        assignee.value = '';
    })

    function deleteItem(e) {

        itemToDelete = e.target.parentNode.parentNode;
        id = e.target.parentNode.parentNode.id;

        createTaskBtn.disabled = true;
        deleteTaskBtn.disabled = false;

        title.value = tasks[id].title;
        title.disabled = true;

        description.value = tasks[id].description;
        description.disabled = true;

        label.value = tasks[id].label;
        label.disabled = true;

        points.value = tasks[id].points;
        points.disabled = true;

        assignee.value = tasks[id].assignee;
        assignee.disabled = true;
        
        deleteTaskBtn.addEventListener("click", () => {
            itemToDelete.remove();

            totalPoint -= points.value * 1;
            totalSprintPoints.textContent = `Total Points ${totalPoint}pts`;

            title.value = "";
            title.disabled = false;

            description.value = "";
            description.disabled = false
            
            label.disabled = false;

            points.value = "";
            points.disabled = false;
            
            assignee.value = "";
            assignee.disabled = false;
            
            createTaskBtn.disabled = false;
            deleteTaskBtn.disabled = true;
            
        })
    }
}