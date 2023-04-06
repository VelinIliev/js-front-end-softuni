function main(input) {
    let shoping_list = input.shift().split("!")
    // let initial_list = input.shift();
    // console.log(initial_list);
    // console.log(shoping_list);
    input.forEach(element => {
        let [command, ...data] = element.split(" ")
        if (command === "Urgent") {
            let item = data[0];
            if (!(shoping_list.includes(item))) {
                shoping_list.unshift(item)
            } 
        } else if (command === "Unnecessary") {
            let item = data[0]
            if (shoping_list.includes(item)) {
                let index = shoping_list.indexOf(item);
                shoping_list.splice(index, 1);
            }
        } else if (command === "Correct") {
            let old_item = data[0];
            let new_item = data[1]
            if (shoping_list.includes(old_item)) {
                let index = shoping_list.indexOf(old_item)
                shoping_list[index] = new_item
            }
        } else if (command === "Rearrange") {
            item = data[0];
            if (shoping_list.includes(item)){
                let index = shoping_list.indexOf(item)
                shoping_list.splice(index, 1)
                shoping_list.push(item)
            }
        } else if (command === "Go") {
            console.log(shoping_list.join(", "));
        }
    });
}

main(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]
)

main((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)