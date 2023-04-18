window.addEventListener('load', solve);

function solve() {
    const typeProduct = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    const sendBtn = document.querySelector('#right button');
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders =document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn')


    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (description.value && clientName.value && clientPhone.value){
            
            let divEl = document.createElement("DIV");
            divEl.className = 'container';
            receivedOrders.appendChild(divEl);

            let productTypeEl = document.createElement("H2");
            productTypeEl.textContent = `Product type for repair: ${typeProduct.value}`;
            divEl.appendChild(productTypeEl);

            let clientEl = document.createElement("H3");
            clientEl.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
            divEl.appendChild(clientEl);

            let descrEl = document.createElement("H4");
            descrEl.textContent = `Description of the problem: ${description.value}`;
            divEl.appendChild(descrEl);

            let satrtBtn = document.createElement("BUTTON");
            satrtBtn.className = 'start-btn';
            satrtBtn.textContent = 'Start repair';
            divEl.appendChild(satrtBtn);

            let finishBtn = document.createElement("BUTTON");
            finishBtn.className = 'finish-btn';
            finishBtn.textContent = 'Finish repair';
            finishBtn.disabled = true;
            divEl.appendChild(finishBtn);

            satrtBtn.addEventListener("click", startRepair);
            finishBtn.addEventListener("click", FinishRepair);

            description.value = '';
            clientName.value = '';
            clientPhone.value = '';
        }
    })

    function startRepair(e) {
        currentProduct = e.currentTarget.parentNode;
        satrtBtn = currentProduct.querySelector('.start-btn');
        finishBtn = currentProduct.querySelector('.finish-btn');
        satrtBtn.disabled = true;
        finishBtn.disabled = false;
    }
    
    function FinishRepair(e) {
        currentProduct = e.currentTarget.parentNode;
        satrtBtn = currentProduct.querySelector('.start-btn');
        finishBtn = currentProduct.querySelector('.finish-btn');

        satrtBtn.remove();
        finishBtn.remove();

        currentProduct.remove();

        completedOrders.appendChild(currentProduct)

    }

    clearBtn.addEventListener('click', (e)=>{
        while (e.currentTarget.nextElementSibling !== null) {
            e.currentTarget.nextElementSibling.remove()
        }
    })
}