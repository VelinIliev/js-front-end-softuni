window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const addBtn = document.getElementById('add');
    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price')

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (model.value && description.value && year.value && price.value && year.value * 1 >= 0 && price.value * 1 >= 0)
        {
            let trEl = document.createElement("TR");
            trEl.className = 'info';
            furnitureList.appendChild(trEl);

            let nameEl = document.createElement("TD");
            nameEl.textContent = model.value;
            trEl.appendChild(nameEl);

            let priceEl = document.createElement("TD");
            priceEl.textContent = (price.value * 1).toFixed(2);
            trEl.appendChild(priceEl);

            let buttonsEl = document.createElement("TD");
            trEl.appendChild(buttonsEl);

            let moreBtn = document.createElement("BUTTON");
            moreBtn.className = 'moreBtn';
            moreBtn.textContent = 'More Info';
            buttonsEl.appendChild(moreBtn);

            let buyBtn = document.createElement("BUTTON");
            buyBtn.className = 'buyBtn';
            buyBtn.textContent = 'Buy it';
            buttonsEl.appendChild(buyBtn);

            let trHideEl = document.createElement("TR");
            trHideEl.className = 'hide';
            furnitureList.appendChild(trHideEl);

            let yearEl = document.createElement('TD');
            yearEl.textContent = `Year: ${year.value}`;
            trHideEl.appendChild(yearEl);

            let descrEl = document.createElement("TD");
            descrEl.colSpan = '3';
            descrEl.textContent = `Description: ${description.value}`;
            trHideEl.appendChild(descrEl);

            moreBtn.addEventListener("click", moreInfo);
            buyBtn.addEventListener("click", buyItem);

            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';
        };
    });

    function moreInfo(e) {
        let currentProduct = e.currentTarget.parentNode.parentNode;

        let btn = currentProduct.querySelector('.moreBtn')
        if (btn.textContent === 'More Info') {
            btn.textContent = 'Less Info';
            currentProduct.nextSibling.style.display = 'contents'
        } else {
            btn.textContent = 'More Info';
            currentProduct.nextSibling.style.display = 'none'
        }
        
    }

    function buyItem(e) {
        let currentProduct = e.currentTarget.parentNode.parentNode;
        let currentDescription = currentProduct.nextSibling;

        let currentPrice = currentProduct.querySelector('td:nth-child(2)').textContent
        totalPrice.textContent = (totalPrice.textContent * 1 + currentPrice * 1).toFixed(2);

        currentDescription.remove()
        currentProduct.remove();
    }
}
