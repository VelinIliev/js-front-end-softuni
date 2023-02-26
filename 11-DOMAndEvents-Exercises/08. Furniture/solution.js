function solve() {
    const exercise = document.getElementById('exercise');
    const tbody = document.querySelector('tbody');
    const textarea = exercise.children[1];
    const generateBtn = exercise.children[2];
    const outputArea = exercise.children[4];
    const buyBtn = exercise.children[5];
    
   function generateItems() {
        data = JSON.parse(textarea.value);

        for (let i = 0; i < data.length; i++){
            tbody.innerHTML += 
            `<tr>
                <td><img src=${data[i].img}></td>
                <td><p>${data[i].name}</p></td>
                <td><p>${data[i].price}</p></td>
                <td><p>${data[i].decFactor}</p></td>
                <td><input type="checkbox" /></td>
            </tr>`
        }
    }

    function buyItems() {
        let dict = {
            'items': [],
            'prices': 0,
            'decFactor': 0
        }

        const rows = document.querySelectorAll('tbody tr');

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].children[4].children[0].checked) {
                dict['items'].push(rows[i].children[1].children[0].innerHTML);
                dict['prices'] += rows[i].children[2].children[0].innerHTML * 1;
                dict['decFactor'] += rows[i].children[3].children[0].innerHTML * 1;
            }
        }
        
        let output = [];

        output.push(`Bought furniture: ${dict.items.join(", ")}`)
        output.push(`Total price: ${dict.prices.toFixed(2)}`)
        output.push(`Average decoration factor: ${(dict.decFactor / dict.items.length)}`)

        outputArea.value = output.join("\n") 
    }

    generateBtn.addEventListener('click',generateItems);
    buyBtn.addEventListener('click', buyItems);
}