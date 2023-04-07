function solve(params) {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const loadBtn = document.getElementById('load-product');
    const updateBtn = document.getElementById('update-product')
    const addBtn = document.getElementById('add-product');
    const tbody = document.getElementById('tbody');
    const product = document.getElementById('product');
    const count = document.getElementById('count');
    const price = document.getElementById('price');


    function displayProducts(data) {
        tbody.innerHTML = ""
        Object.values(data).forEach(el => {
            

            let trEl = document.createElement("TR");
            trEl.id = el._id
            tbody.appendChild(trEl);

            let nameEL = document.createElement("TD");
            nameEL.className = "name";
            nameEL.textContent = el.product;
            trEl.appendChild(nameEL);

            let countEl = document.createElement("TD")
            countEl.className = "count-product";
            countEl.textContent = el.count;
            trEl.appendChild(countEl)

            let priceEl = document.createElement("TD")
            priceEl.className = "product-price";
            priceEl.textContent = el.price;
            trEl.appendChild(priceEl)

            let buttonsEl = document.createElement("TD")
            buttonsEl.className = "btn";
            trEl.appendChild(buttonsEl)

            let updateBtn = document.createElement("BUTTON");
            updateBtn.className = "update";
            updateBtn.textContent = "Update";
            buttonsEl.appendChild(updateBtn);

            let deleteBtn = document.createElement("BUTTON");
            deleteBtn.className = "delete";
            deleteBtn.textContent = "Delete";
            buttonsEl.appendChild(deleteBtn);

            updateBtn.addEventListener("click", updatePrdoduct);
            deleteBtn.addEventListener("click", deletePrdoduct);
            
        });
        
    }
    function getData() {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.log(error))
    }

    function addProduct(e) {
        e.preventDefault();
        if (product.value && count.value, price.value){
            fetch(BASE_URL, {
                method: "POST",
                body: JSON.stringify({
                    "product": product.value,
                    "count": count.value,
                    "price": price.value
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(data => getData())
            .catch((error) => console.log(error))
        }
        product.value = "";
        count.value = "";
        price.value = "";
    }

    function updatePrdoduct(e) {
        currentProduct = e.target.parentNode.parentNode;
        console.log(currentProduct.id);
        updateBtn.disabled = false;
        addBtn.disabled = true;
        // console.log(e.target.parentNode.parentNode);

        product.value = currentProduct.querySelector(".name").textContent;
        count.value = currentProduct.querySelector(".count-product").textContent;
        price.value = currentProduct.querySelector(".product-price").textContent;

        updateBtn.addEventListener("click", () => {
            sendUpdate(currentProduct.id)
        })
    }

    function sendUpdate(id){
        if (product.value && count.value, price.value){
            fetch(BASE_URL + id, {
                method: "PATCH",
                body: JSON.stringify({
                    "product": product.value,
                    "count": count.value,
                    "price": price.value
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(data => getData())
            .catch((error) => console.log(error))

            product.value = "";
            count.value = "";
            price.value = "";
        }
        updateBtn.disabled = true;
        addBtn.disabled = false;
    }

    function deletePrdoduct(e) {
        id = e.target.parentNode.parentNode.id;
        fetch(BASE_URL + id, {
            method: 'DELETE',
            })
        .then(res => res.json()) 
        .then(data => getData())
    }

    

    loadBtn.addEventListener("click", (e) => {
        e.preventDefault()
        getData()
    });

    addBtn.addEventListener('click', addProduct);
    
}

solve()