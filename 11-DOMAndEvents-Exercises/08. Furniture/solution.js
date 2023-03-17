function solve() {
    const exercise = document.getElementById('exercise');
    const tbody = document.querySelector('tbody');
    const textarea = exercise.children[1];
    const generateBtn = exercise.children[2];
    const outputArea = exercise.children[4];
    const buyBtn = exercise.children[5];
    
   function generateItems() {
        data = JSON.parse(textarea.value);
        data.forEach(article => {

            let tablerRowEl = document.createElement('tr');

            let firstCellEl = document.createElement('td');
            let img = document.createElement('img');
            img.src = article.img;
            firstCellEl.appendChild(img);
            tablerRowEl.appendChild(firstCellEl);
            
            let secondCellEl = document.createElement('td');
            let secondCellParagraph = document.createElement('p');
            secondCellParagraph.textContent = article.name;
            secondCellEl.appendChild(secondCellParagraph);
            tablerRowEl.appendChild(secondCellEl);

            let priceCell = document.createElement('td');
            let priceCellParagraph = document.createElement('p');
            priceCellParagraph.textContent = article.price
            priceCell.appendChild(priceCellParagraph)
            tablerRowEl.appendChild(priceCell)

            let deFactorCell = document.createElement('td');
            let deFactorCellParagraph = document.createElement('p');
            deFactorCellParagraph.textContent = article.decFactor;
            deFactorCell.appendChild(deFactorCellParagraph);
            tablerRowEl.appendChild(deFactorCell);

            let markCell = document.createElement('td');
            let markCellInput = document.createElement('input');
            markCellInput.type = 'checkbox';
            markCell.appendChild(markCellInput);
            tablerRowEl.appendChild(markCell)
            
            tbody.appendChild(tablerRowEl)
        })
    }

    function buyItems() {
        let dict = {
            'items': [],
            'prices': 0,
            'decFactor': 0
        }

        const rows = [...document.querySelectorAll('tbody tr')];
        rows.forEach(row => {
            
            const inputBox = row.querySelector('td>input');

            console.log(row);
            if (inputBox.checked) {
                dict['items'].push(row.children[1].children[0].textContent);
                dict['prices'] += row.children[2].children[0].textContent * 1;
                dict['decFactor'] += row.children[3].children[0].textContent * 1;
            }
        })
                    
        let output = [];

        output.push(`Bought furniture: ${dict.items.join(", ")}`)
        output.push(`Total price: ${dict.prices.toFixed(2)}`)
        output.push(`Average decoration factor: ${(dict.decFactor / dict.items.length)}`)

        outputArea.value = output.join("\n") 
    }

    generateBtn.addEventListener('click',generateItems);
    buyBtn.addEventListener('click', buyItems);
}