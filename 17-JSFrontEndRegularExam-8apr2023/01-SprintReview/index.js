function main(input) {

    let assignees = {}

    let n = input.shift()

    for (let i = 0; i < n; i++) {
        let data = input.shift()
        let [name, taskId, title, status, points] = data.split(":");
        
        if (!(name in assignees)) {
            assignees[name] = []  
        } 
        if (!(taskId in assignees[name] )) {
            assignees[name].push({taskId, title, status, "points": points * 1})
        }
    }

    input.forEach(el => {

        let [command, name, ...data] = el.split(":");
        
        if (command === "Add New") {
            if (!(name in assignees)) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else {
                let [taskId, title, status, points] = data;
                assignees[name].push({taskId, title, status, "points": points * 1})
            }
        } else if (command === "Change Status") {
            if (!(name in assignees)) {
                console.log(`Assignee ${name} does not exist on the board!`);
            } else {
                let taskId = data[0];
                let newStatus = data[1];
                let foundTask = false
                assignees[name].forEach(element => {
                    if (element.taskId === taskId) {
                        foundTask = true;
                        element.status = newStatus;
                    }
                });
                if (foundTask === false) {
                    console.log(`Task with ID ${taskId} does not exist for ${name}!`);
                }
            }
        } else if (command === "Remove Task") {
            let index = data[0] * 1;
            // console.log(index);
            if (!(name in assignees)) {
                console.log(`Assignee ${name} does not exist on the board!`)
                
            } else {
                // console.log(assignees[name].length - 1, index);
                if (index > assignees[name].length - 1 || index < 0) {
                    console.log("Index is out of range!");
                } else {
                    assignees[name].splice(index, 1)
                }
            }
        }
    });
    let todo = 0;
    let progress = 0;
    let review = 0;
    let done = 0;

    Object.values(assignees).forEach(element => {
        element.forEach(el => {
            // console.log(el.status);
            if (el.status === "ToDo") {
                todo += el.points;
            } else if (el.status === "In Progress") {
                progress += el.points
            } else if (el.status === "Code Review") {
                review += el.points
            } else if (el.status === "Done") {
                done += el.points
            }
        });
    });
    console.log(`ToDo: ${todo}pts`);
    console.log(`In Progress: ${progress}pts`);
    console.log(`Code Review: ${review}pts`);
    console.log(`Done Points: ${done}pts`);

    if (done >= todo + progress + review){
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
 
}

// main([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
//     ]
// )

main ([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]

)